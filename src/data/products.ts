import { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "packaged-substations",
    name: "Packaged Substations",
    category: "Turnkey Power Systems",
    summary:
      "Compact, factory-tested packaged substations for utility and industrial distribution projects.",
    intro:
      "Our packaged substations are engineered for quick deployment, minimal site works, and long service life in demanding environments.",
    image: "/images/product-substation.svg",
    highlights: [
      "Indoor and outdoor kiosk options",
      "MV switchgear, transformer and LV panel integration",
      "Factory routine and FAT documentation",
    ],
    specifications: [
      { label: "Voltage Range", value: "11kV to 33kV" },
      { label: "Transformer Rating", value: "Up to 4000 kVA" },
      { label: "Ingress Protection", value: "IP44 to IP54" },
      { label: "Compliance", value: "IEC 62271 / IEC 60076" },
    ],
    downloads: [
      { title: "Packaged Substation Brochure", file: "/pdfs/packaged-substation-brochure.pdf" },
    ],
    applications: ["Grid interconnects", "Industrial plants", "Commercial complexes"],
  },
  {
    slug: "mv-switchgear",
    name: "MV Switchgear",
    category: "Medium Voltage",
    summary:
      "Reliable medium-voltage switchgear systems for utility feeders and critical industrial loads.",
    intro:
      "Designed for high operational safety and easy maintenance, our MV switchgear supports modern protection and control schemes.",
    image: "/images/product-mv-switchgear.svg",
    highlights: [
      "Metal-clad and metal-enclosed constructions",
      "Protection relay integration",
      "WAPDA/K-Electric application readiness",
    ],
    specifications: [
      { label: "Rated Voltage", value: "3.3kV to 36kV" },
      { label: "Rated Current", value: "630A to 3150A" },
      { label: "Short Circuit Withstand", value: "Up to 31.5kA" },
      { label: "Standards", value: "IEC 62271-200" },
    ],
    downloads: [{ title: "MV Switchgear Datasheet", file: "/pdfs/mv-switchgear-datasheet.pdf" }],
    applications: ["Utilities", "Cement", "Textile and process industries"],
  },
  {
    slug: "lv-panels",
    name: "LV Switchgear & Distribution Panels",
    category: "Low Voltage",
    summary:
      "Custom LV switchboards, MCCs, and distribution panels for reliable low-voltage power distribution.",
    intro:
      "From feeder pillars to intelligent motor control centers, we design and assemble panels tailored to project load profiles.",
    image: "/images/product-lv-panels.svg",
    highlights: [
      "Type-tested designs available",
      "ATS, synchronization, and power factor correction",
      "SCADA and metering integration",
    ],
    specifications: [
      { label: "Rated Voltage", value: "400V to 690V" },
      { label: "Rated Current", value: "Up to 6300A" },
      { label: "Form of Separation", value: "Up to Form 4b" },
      { label: "Standards", value: "IEC 61439" },
    ],
    downloads: [{ title: "LV Panels Catalog", file: "/pdfs/lv-panels-catalog.pdf" }],
    applications: ["Commercial towers", "Manufacturing plants", "Infrastructure projects"],
  },
  {
    slug: "dry-type-transformers",
    name: "Dry Type Transformers",
    category: "Transformers",
    summary:
      "Energy-efficient dry type transformers engineered for safer operation and reduced maintenance.",
    intro:
      "Our dry type transformers are suitable for fire-sensitive environments and indoor installations requiring dependable operation.",
    image: "/images/product-transformer.svg",
    highlights: [
      "Low losses and high thermal performance",
      "Cast resin and VPI options",
      "Custom tap configurations",
    ],
    specifications: [
      { label: "Capacity", value: "100 kVA to 3150 kVA" },
      { label: "Insulation Class", value: "Class F / Class H" },
      { label: "Cooling", value: "AN / AF" },
      { label: "Standards", value: "IEC 60076-11" },
    ],
    downloads: [
      { title: "Dry Type Transformer Specs", file: "/pdfs/dry-type-transformer-specs.pdf" },
    ],
    applications: ["Hospitals", "Data centers", "Industrial process areas"],
  },
];
