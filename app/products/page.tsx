"use client";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ProductCard from "../components/ProductCard";
import { PageState } from "../components/PageState";

export default function ProductList() {
  const { items, filter, likedItems } = useSelector(
    (state: RootState) => state.products
  );

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
