"use client";

import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../redux/cartSlice";
import { CartItem } from "../utils/interfaces";

export default function CartLine({ product }: { product: CartItem }) {
  const dispatch = useDispatch();

  return (
    <div
      key={product.id}
      className="w-full flex flex-wrap flex-col sm:flex-row gap-4 items-center justify-between p-4 rounded-lg shadow-lg "
    >
      <div className="flex items-center gap-4">
        <Image
          src={product.img}
          alt={product.name}
          width={60}
          height={60}
          className="rounded-md object-cover"
        />
        <div className="font-semibold text-lg">{product.name}</div>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="btn "
          onClick={() => dispatch(decreaseQuantity(product.id))}
        >
          -
        </button>
        <span className="font-semibold">{product.quantity}</span>
        <button
          className="btn"
          onClick={() => dispatch(increaseQuantity(product.id))}
        >
          +
        </button>
        <button
          className="btn  hover:bg-red-600 text-white"
          onClick={() => dispatch(removeItem(product.id))}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
