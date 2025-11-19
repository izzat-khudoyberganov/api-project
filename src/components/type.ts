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