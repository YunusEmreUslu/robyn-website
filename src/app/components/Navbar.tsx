"use client";
import React from "react";
import { BackgroundLines } from "./ui/background-lines";

export default function Navbar() {
  return (
    <nav className="flex flex-col items-center pb-3 relative">
      <BackgroundLines className="relative w-[400px] h-[200px] flex items-center justify-center">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-5xl lg:text-7xl font-sans py-1 md:py-10 z-10 font-bold tracking-tight">
          Robyn <br /> Walsh
        </h2>
      </BackgroundLines>
    </nav>
  );
}
