export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  items: Record<number, CartItem>;
}

interface LocationInfo {
  name: string;
  url?: string;
}

export interface Product {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: LocationInfo;
  location: LocationInfo;
  image: string;
  episode: string[];
}

export interface ProductsState {
  items: Product[];
  likedItems: number[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  filter: "all" | "liked";
}

export interface NewProductFormData {
  name: string;
  image: string;
  species: string;
  status: string;
  gender: string;
  origin: string;
  location: string;
  episode: string;
}
