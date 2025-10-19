export interface CardProps {
    name: string;
}

export interface ButtonProps {
    label: string;
    onClick: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}

export interface CategoryIconProps {
  icon: string;
  label: string; 
  active?: boolean;
  onClick?: () => void;
}

export interface PillProps {
  label: string;
  onClick?: (label: string) => void;
  active?: boolean;
  className?: string;
}