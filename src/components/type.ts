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
  image: string;
  title: string;
  price: number;
}
