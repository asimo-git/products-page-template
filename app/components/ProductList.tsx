"use client";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { AppDispatch, RootState } from "../redux/store";
import { fetchProducts } from "../redux/productsSlice";
import ProductCard from "./ProductCard";
import { PageState } from "./PageState";

export default function ProductList() {
  const dispatch = useDispatch<AppDispatch>();

  const { items, filter, likedItems } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
