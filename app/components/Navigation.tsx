"use client";

import { usePathname } from "next/navigation";
import DisplayFilter from "./DisplayFilter";
import HomeButton from "./HomeButton";

export default function Navigation() {
  const pathname = usePathname();

  if (pathname === "/products") {
    return <DisplayFilter />;
  }

  if (pathname.startsWith("/products/")) {
    return <HomeButton />;
  }

  return null;
}
