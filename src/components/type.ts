import type { LucideIcon } from "lucide-react";


export interface NavDataI {
  id: number;
  href: string;
  text: string;
}

export interface HeaderNavDataI {
  id: number;
  text: string;
  href: string;
}

export interface FooterNavDataI extends HeaderNavDataI {}

export interface CategoryCardPropsI {
  name: string;
  slug: string;
  image: string;
}

export interface CategoriesDataI {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

export interface ProductInfoI {
  id: number;
  category: CategoriesDataI;
  creationAt: string;
  description: string;
  images: string[];
  price: number;
  slug: string;
  title: string;
  updatedAt: string;
}

export interface ProductCardPropsI {
  id: number;
  image: string;
  title: string;
  price: number;
}


export interface FooterSocialMediaIcons {
  id: number,
  icon: LucideIcon
}