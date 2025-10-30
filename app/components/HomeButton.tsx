"use client";

import Link from "next/link";

export default function HomeButton() {
  return (
    <Link
      href="/products"
      className="bg-cardBtn text-accent block h-10  px-4 py-2 rounded hover:bg-activeBtn transition"
    >
      Back to main
    </Link>
  );
}
