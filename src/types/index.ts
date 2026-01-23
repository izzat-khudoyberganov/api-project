import type { LucideIcon } from "lucide-react";

// Navigation types
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

// Category types
export interface CategoryCardPropsI {
  name: string;
  slug: string;
  image?: string;
}

export interface CategoriesDataI {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

// Product types
export interface ProductCardPropsI {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
  rating?: number;
}

export interface ProductResponse {
  products: ProductI[];
  total: number;
  skip: number;
  limit: number;
}

export interface ProductI {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  thumbnail: string;
  images: string[];
}

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

// Cart and Like types
export interface CartItem extends ProductCardPropsI {
  quantity: number;
}

export interface LikedItem extends ProductCardPropsI {
  isInCart?: boolean;
}

// Footer types
export interface FooterSocialMediaIcons {
  id: number;
  icon: LucideIcon;
}

// Store state types
export interface StoreState {
  cartItems: CartItem[];
  likedItems: LikedItem[];
}

// Store action types
export type StoreAction =
  | { type: "ADD_TO_CART"; payload: ProductCardPropsI }
  | { type: "ADD_TO_LIKE"; payload: ProductCardPropsI }
  | { type: "REMOVE_FROM_CART"; payload: number }
  | { type: "REMOVE_FROM_LIKE"; payload: number }
  | { type: "ADD_ONE"; payload: number }
  | { type: "REMOVE_ONE"; payload: number };

// Context type
export interface MainContextType {
  cartItems: CartItem[];
  likedItems: LikedItem[];
  addToCart: (item: ProductCardPropsI) => void;
  addToLike: (item: ProductCardPropsI) => void;
  removeFromCart: (itemId: number) => void;
  removeFromLike: (itemId: number) => void;
  addOne: (itemId: number) => void;
  removeOne: (itemId: number) => void;
}
