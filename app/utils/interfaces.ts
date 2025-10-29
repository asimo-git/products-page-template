export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  items: Record<number, CartItem>;
}

export interface Product {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
}

export interface ProductsState {
  items: Product[];
  likedItems: number[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
