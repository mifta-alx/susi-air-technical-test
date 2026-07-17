import { defineStore } from "pinia";
import initialDocumentData from "~/data/mock-documents.json";
import type {
  DocumentsData,
  DocumentStatus,
  ProcessedDocument,
} from "~/types/documents";

export const useDocumentStore = defineStore("documents", {
  state: () => ({
    ...(structuredClone(initialDocumentData) as DocumentsData),
    loading: true,
  }),
  
  actions: {
    async fetchDocuments() {
      this.loading = true;
      await new Promise(resolve => setTimeout(resolve, 600));
      this.loading = false;
    },
  },

  getters: {
    getDocuments: (state) => state.documents,
    getProcessedDocuments: (state): ProcessedDocument[] => {
      const todayDate = new Date(state.today);
      const warningDays = state.thresholds.warningDays;

      return state.documents.map((doc) => {
        const expiryDate = new Date(doc.expiryDate);

        // Menghitung selisih hari: (Expiry - Today) / (1000ms * 60s * 60m * 24h)
        const diffTime = expiryDate.getTime() - todayDate.getTime();
        const daysRemaining = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        let status: DocumentStatus = "safe";
        if (daysRemaining <= 0) {
          status = "expired";
        } else if (daysRemaining <= warningDays) {
          status = "soon";
        }

        const formattedLabel = doc.label
          .replace(/\s*Exp\.?\s*Date/gi, "")
          .replace(/\s*Date/gi, "")
          .trim();

        return {
          ...doc,
          label: formattedLabel,
          daysRemaining,
          status,
        };
      });
    },
  },
});
