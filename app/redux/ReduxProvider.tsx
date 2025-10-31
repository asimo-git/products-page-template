"use client";

import { PropsWithChildren, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { fetchProducts } from "./productsSlice";

export default function ReduxProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    const saved = localStorage.getItem("products");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed.items)) {
          store.dispatch({ type: "products/hydrate", payload: parsed });
        } else {
          localStorage.removeItem("products");
          store.dispatch(fetchProducts());
        }
      } catch {
        store.dispatch(fetchProducts());
      }
    } else {
      store.dispatch(fetchProducts());
    }

    const unsubscribe = store.subscribe(() => {
      localStorage.setItem(
        "products",
        JSON.stringify(store.getState().products)
      );
    });
    return () => unsubscribe();
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
