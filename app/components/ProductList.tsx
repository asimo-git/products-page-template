"use client";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { AppDispatch, RootState } from "../redux/store";
import { fetchProducts } from "../redux/productsSlice";
import ProductCard from "./ProductCard";
import { PageState } from "./PageState";

export default function ProductList() {
  const dispatch = useDispatch<AppDispatch>();

  const { items } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <PageState />

      <div className="w-full flex justify-evenly gap-5 flex-wrap">
        {items.map((item) => (
          <ProductCard key={item.id} productInfo={item} />
        ))}
      </div>
    </>
  );
}
