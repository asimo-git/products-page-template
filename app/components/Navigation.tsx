"use client";

import { usePathname } from "next/navigation";
import DisplayFilter from "./DisplayFilter";
import HomeButton from "./HomeButton";
import Link from "next/link";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-2 items-center">
      {pathname === "/products" ? <DisplayFilter /> : <HomeButton />}

      {pathname !== "/create-product" && (
        <Link
          href="/create-product"
          className="bg-cardBtn text-accent block h-10  px-4 py-2 rounded hover:bg-activeBtn transition"
        >
          Create a new item
        </Link>
      )}
    </nav>
  );
}
