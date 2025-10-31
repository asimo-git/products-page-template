"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

export default function ProductCard() {
  const params = useParams();
  const { id } = params;
  const product = useSelector((state: RootState) =>
    state.products.items.find((item) => item.id === Number(id))
  );

  if (!product)
    return (
      <p>
        An unknown error occurred. Please return to the main page and try again.
      </p>
    );

  return (
    <div className="flex flex-col md:flex-row p-6 gap-8">
      <div className="flex-shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="w-72 h-auto rounded-xl"
        />
      </div>

      <div className="flex flex-col gap-4 text-left">
        <h1 className="text-3xl font-bold">{product.name}</h1>

        <p>
          <span className="font-semibold">Species:</span> {product.species}
        </p>
        <p>
          <span className="font-semibold">Status:</span> {product.status}
        </p>
        <p>
          <span className="font-semibold">Gender:</span> {product.gender}
        </p>
        <p>
          <span className="font-semibold">Origin:</span> {product.origin.name}
        </p>
        <p>
          <span className="font-semibold">Location:</span>{" "}
          {product.location.name}
        </p>

        <div className="mt-2">
          <p className="font-semibold mb-1">Episodes:</p>
          <p>
            {product.episode.map((ep, i) => {
              const match = ep.match(/\/episode\/(\d+)$/);
              return (
                <span key={i}>
                  {match ? `episode ${match[1]}` : ep}
                  {i < product.episode.length - 1 ? ", " : ""}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
