import { DownloadItem } from "@/types";

export const downloads: DownloadItem[] = [
  {
    title: "Corporate Profile",
    description: "Overview of our engineering capabilities, manufacturing facilities, and quality systems.",
    file: "/pdfs/corporate-profile.pdf",
    category: "Company",
  },
  {
    title: "Switchgear Product Catalog",
    description: "MV and LV product range with technical configurations and compliance references.",
    file: "/pdfs/switchgear-catalog.pdf",
    category: "Products",
  },
  {
    title: "Quality & Test Certificates",
    description: "Sample type test reports and quality certification documents.",
    file: "/pdfs/quality-certificates.pdf",
    category: "Compliance",
  },
];
