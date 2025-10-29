"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Product } from "../utils/interfaces";
import { Heart } from "lucide-react";
import { Trash2 } from "lucide-react";
import { removeItem, toggleLike } from "../redux/productsSlice";

export default function CardButtonBar({ product }: { product: Product }) {
  const dispatch = useDispatch();
  const likedItems = useSelector(
    (state: RootState) => state.products.likedItems
  );

  return (
    <div>
      <button
        className={`btn btn-card m-2 ${
          likedItems.includes(product.id) && "btn-active"
        }`}
        onClick={() => dispatch(toggleLike(product.id))}
      >
        <Heart />
      </button>

      <button
        className="btn btn-card"
        onClick={() => dispatch(removeItem(product.id))}
      >
        <Trash2 />
      </button>
    </div>
  );
}
