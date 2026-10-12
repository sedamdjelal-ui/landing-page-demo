import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OrderForm from "@/components/OrderForm";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Features />
        <Pricing />
        <OrderForm />
      </main>
      <Footer />
    </>
  );
}
