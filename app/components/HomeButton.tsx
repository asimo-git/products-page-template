"use client";

import Link from "next/link";

export default function HomeButton() {
  return (
    <nav>
      <Link
        href="/products"
        className="bg-cardBtn text-accent px-4 py-2 rounded hover:bg-activeBtn transition"
      >
        Back to main
      </Link>
    </nav>
  );
}
