"use client";

import { PropsWithChildren, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

export default function ReduxProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    try {
      const savedState = localStorage.getItem("cartState");
      if (savedState) {
        store.dispatch({
          type: "cart/hydrate",
          payload: JSON.parse(savedState),
        });
      }

      const unsubscribe = store.subscribe(() => {
        localStorage.setItem(
          "cartState",
          JSON.stringify(store.getState().cart)
        );
      });

      return () => unsubscribe();
    } catch (e) {
      console.error("Error with localStorage:", e);
    }
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
