export interface Tresholds {
  warningDays: number;
  comment: string;
}
export type DocumentStatus = "expired" | "soon" | "safe";

export interface Document {
  id: string;
  label: string;
  expiryDate: string;
}

export interface ProcessedDocument extends Document {
  daysRemaining: number
  status: DocumentStatus
}

export interface DocumentsData {
  today: string;
  thresholds: Tresholds;
  documents: Document[];
}
