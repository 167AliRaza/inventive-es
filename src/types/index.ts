export type Address = {
  city: string;
  line1: string;
  line2: string;
  phone: string;
  mapUrl: string;
};

export type SiteMeta = {
  name: string;
  shortName: string;
  description: string;
  url: string;
  email: string;
  salesEmail: string;
  phone: string;
  hotline: string;
  established: number;
  headquarters: string;
  socialLinks: { label: string; href: string }[];
  certifications: { name: string; image: string; file: string }[];
  addresses: Address[];
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  intro: string;
  image: string;
  highlights: string[];
  specifications: { label: string; value: string }[];
  downloads: { title: string; file: string }[];
  applications: string[];
};

export type Client = {
  name: string;
  logo: string;
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  year: string;
  image: string;
  summary: string;
};

export type DownloadItem = {
  title: string;
  description: string;
  file: string;
  category: string;
};
