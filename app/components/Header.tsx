import Link from "next/link";
import Navigation from "./Navigation";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-background shadow-md w-full flex justify-between gap-2 items-center p-4 flex-wrap">
      <div>
        <h1 className="font-[family-name:var(--font-title)] text-4xl">
          <Link href="/">
            <Image src={"/logo.png"} alt="logo" width={300} height={60} />
          </Link>
        </h1>
      </div>
      <Navigation />
    </header>
  );
}
