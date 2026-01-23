export const APP_CONFIG = {
  API_BASE_URL: 'https://dummyjson.com',
  DEFAULT_CURRENCY: 'USD',
  DEFAULT_LANGUAGE: 'en',
  PAGINATION_LIMIT: 12,
  DEBOUNCE_DELAY: 300,
  TOAST_DURATION: 2000,
} as const;

export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT: (id: number) => `/product/${id}`,
  CATEGORIES: '/categories',
  CATEGORY: (slug: string) => `/categories/${slug}`,
} as const;

export const STORAGE_KEYS = {
  CART_ITEMS: 'cartItems',
  LIKED_ITEMS: 'likedItems',
  THEME: 'theme',
} as const;
