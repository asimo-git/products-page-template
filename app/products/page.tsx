"use client";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { AppDispatch, RootState } from "../redux/store";
import { fetchProducts, setProducts } from "../redux/productsSlice";
import ProductCard from "../components/ProductCard";
import { PageState } from "../components/PageState";
import { Product } from "../utils/interfaces";

export default function ProductList() {
  const dispatch = useDispatch<AppDispatch>();

  const { items, filter, likedItems } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    try {
      const storedItems = localStorage.getItem("products");

      if (storedItems) {
        const parsedItems = JSON.parse(storedItems);
        if (Array.isArray(parsedItems)) {
          dispatch(setProducts(parsedItems as Product[]));
          return;
        }
      }

      dispatch(fetchProducts());
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      dispatch(fetchProducts());
    }
  }, [dispatch]);

  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("products", JSON.stringify(items));
    }
  }, [items]);

  return (
    <>
      <PageState />

      <div className="w-full flex justify-evenly gap-5 flex-wrap">
        {filter === "all"
          ? items.map((item) => (
              <ProductCard key={item.id} productInfo={item} />
            ))
          : likedItems.length === 0
          ? "The favorites list is empty"
          : items
              .filter((item) => likedItems.includes(item.id))
              .map((item) => <ProductCard key={item.id} productInfo={item} />)}
      </div>
    </>
  );
}
