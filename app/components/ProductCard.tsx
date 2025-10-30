"use client";
import Image from "next/image";
import { Product } from "../utils/interfaces";
import CardButtonBar from "./CardButtonBar";
import { useRouter } from "next/navigation";

export default function ProductCard({ productInfo }: { productInfo: Product }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/products/${productInfo.id}`);
  };

  return (
    <div
      className=" max-w-lg basis-96 grow p-2 flex flex-col sm:flex-row items-center
             rounded-xl bg-accent transition-colors duration-300 ease-in-out cursor-pointer
             border-2 border-transparent hover:border-activeBtn"
      onClick={handleClick}
    >
      <div className="flex-shrink-0">
        <Image
          src={productInfo.image}
          alt={productInfo.name}
          width={240}
          height={240}
        />
      </div>
      <div className="h-full p-2 flex flex-col flex-grow items-center justify-between text-center">
        <div>
          <h2 className="text-2xl font-semibold">{productInfo.name}</h2>
          <p className="flex-grow mt-2">Species: {productInfo.species}</p>
          <p className="flex-grow mt-2">Status: {productInfo.status}</p>
        </div>
        <CardButtonBar product={productInfo} />
      </div>
    </div>
  );
}
