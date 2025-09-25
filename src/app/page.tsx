import Image from "next/image";
import Navbar from "./components/Navbar";
import { CarouselDemo } from "./components/carousel-demo";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <CarouselDemo />
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
