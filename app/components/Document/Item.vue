<script setup lang="ts">
import {
  CalendarClock,
  ClipboardCheck,
  FileText,
  IdCard,
  ShieldCheck,
  Stethoscope,
} from "@lucide/vue";
import type { DocumentStatus } from "~/types/documents.js";

const props = withDefaults(
  defineProps<{
    id: string;
    label: string;
    expiryDate: string;
    daysRemaining: number;
    status: DocumentStatus;
  }>(),
  {},
);

const getDocIcon = (id: string) => {
  switch (id) {
    case "doc_recurrent":
      return CalendarClock;
    case "doc_ppc":
      return ClipboardCheck;
    case "doc_license":
      return IdCard;
    case "doc_medical":
      return Stethoscope;
    case "doc_security":
      return ShieldCheck;
    default:
      return FileText;
  }
};

const expiryText = computed(() => {
  if (props.status === "expired") {
    if (props.daysRemaining === 0) return "Expired today";
    const absoluteDays = Math.abs(props.daysRemaining);
    return `Expired ${absoluteDays} days ago`;
  }

  if (props.status === "safe" && props.expiryDate) {
    const formattedDate = formatDate(props.expiryDate);
    return `Until ${formattedDate}`;
  }

  return `Expires in ${props.daysRemaining} days`;
});

</script>

<template>
  <div
    class="flex w-full border border-secondary/10 justify-between items-center gap-4 bg-surface p-3 rounded-xl"
  >
    <div class="flex flex-row gap-2.5 items-center">
      <div
        :class="
          cn(
            'rounded-lg size-12 items-center justify-center flex bg-secondary/10 text-secondary/80',
          )
        "
      >
        <component :is="getDocIcon(id)" class="size-5 stroke-[1.5px]" />
      </div>
      <div class="space-y-1">
          <p class="text-sm font-semibold">{{ label }}</p>
        <p class="text-[10px] font-medium text-secondary/80">{{ expiryText }}</p>
      </div>
    </div>
    <DocumentBadge :status="status" />
  </div>
</template>
