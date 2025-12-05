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

export interface ProductCardPropsI {
    id: number;
    image: string;
    title: string;
    price: number;
    description: string;
    rating?: number;
}

export interface FooterSocialMediaIcons {
    id: number;
    icon: LucideIcon;
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
