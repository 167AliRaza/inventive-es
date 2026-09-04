import { SiteMeta } from "@/types";

export const siteConfig: SiteMeta = {
  name: "Inventive Engineering Solution",
  shortName: "Inventive ES",
  description:
    "Design, manufacturing, and supply of MV/LV switchgear, packaged substations, transformers, and turnkey electrical solutions across Pakistan.",
  url: "https://inventive-es.com",
  email: "info@inventive-es.com",
  salesEmail: "sales@inventive-es.com",
  phone: "+92-42-111-555-900",
  hotline: "+92-300-222-8899",
  established: 1993,
  headquarters: "Lahore, Pakistan",
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "Facebook", href: "https://www.facebook.com" },
  ],
  certifications: [
    {
      name: "ISO 9001:2015",
      image: "/images/cert-iso.svg",
      file: "/pdfs/iso-9001-certificate.pdf",
    },
    {
      name: "WAPDA Approved Vendor",
      image: "/images/cert-wapda.svg",
      file: "/pdfs/wapda-approval.pdf",
    },
    {
      name: "Type Test Reports",
      image: "/images/cert-type-test.svg",
      file: "/pdfs/type-test-report.pdf",
    },
  ],
  addresses: [
    {
      city: "Lahore",
      line1: "22-KM Ferozepur Road",
      line2: "Industrial Estate, Lahore",
      phone: "+92-42-111-555-900",
      mapUrl: "https://maps.google.com/?q=Lahore+Pakistan",
    },
    {
      city: "Karachi",
      line1: "Plot 45, Korangi Industrial Area",
      line2: "Karachi, Sindh",
      phone: "+92-21-111-555-900",
      mapUrl: "https://maps.google.com/?q=Karachi+Pakistan",
    },
    {
      city: "Faisalabad",
      line1: "Canal Express Link Road",
      line2: "Faisalabad, Punjab",
      phone: "+92-41-111-555-900",
      mapUrl: "https://maps.google.com/?q=Faisalabad+Pakistan",
    },
  ],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Downloads", href: "/downloads" },
  { label: "Contact", href: "/contact" },
];
