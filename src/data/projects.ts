import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "north-grid-expansion",
    title: "132/11kV North Grid Expansion",
    location: "Lahore",
    year: "2025",
    image: "/images/project-grid.svg",
    summary:
      "Delivered packaged substations and MV switchgear panels for a utility expansion with accelerated commissioning timelines.",
  },
  {
    slug: "industrial-park-distribution",
    title: "Industrial Park Power Distribution",
    location: "Faisalabad",
    year: "2024",
    image: "/images/project-industrial.svg",
    summary:
      "Engineered LV distribution network and transformer package for a multi-tenant textile and process manufacturing site.",
  },
  {
    slug: "hospital-reliability-upgrade",
    title: "Hospital Reliability Upgrade",
    location: "Karachi",
    year: "2023",
    image: "/images/project-hospital.svg",
    summary:
      "Installed dry type transformers and ATS-based LV switchboards to improve uptime for critical medical facilities.",
  },
];
