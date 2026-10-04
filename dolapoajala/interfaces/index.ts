export type Platform = "Web" | "Mobile" | "Web3";

export interface CardProps {
  name: string;
  description: string;
  image: string;
  url: string;
  category: string;
  platform: Platform;
  keyword: string;
  tags?: string[];
  featured?: boolean;
  index?: number;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  date: string;
  bullets: string[];
}

export interface Certification {
  issuer: string;
  title: string;
}

export interface StackGroup {
  label: string;
  tools: string[];
}

export interface Capability {
  kicker: string;
  title: string;
  description: string;
  tags: string[];
  art: "frontend" | "mobile" | "web3" | "backend";
}
