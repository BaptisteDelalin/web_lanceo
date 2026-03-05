export interface Offer {
  slug: string;
  palier: number;
  name: string;
  tagline: string;
  description: string;
  target: string;
  includes: string[];
  duration: string;
  cta: string;
  highlighted: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
