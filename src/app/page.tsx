import Image from "next/image";
import Navbar from "./components/Navbar";
import { Carousel } from "./components/ui/carousel";
import { CarouselDemo } from "./components/carousel-demo";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <CarouselDemo />
      </main>
      <footer></footer>
    </div>
  );
}
