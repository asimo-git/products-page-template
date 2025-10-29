import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-main)] bg-462525">
      <Header />
      <main className="flex-1 w-full flex justify-evenly flex-wrap">
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}
