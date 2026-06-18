export interface ButttonProps {
  label: string;
  onClick: () => void;
  className: string;
}

export interface CardProps {
  name: string;
  description: string;
  image: string;
  title: string;
  tags?: string[];
}

