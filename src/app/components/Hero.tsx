"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-64 h-64 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/examplePic.jpg"
            alt="Your profile"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* RIGHT: Your Intro */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Hi, I’m Robyn Walsh
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          I’m a 3D animation student at IADT at Dun Laoghaire, Dublin, Ireland.
          I love creating immersive experiences through animation and design. My
          passion lies in bringing stories to life with creativity and technical
          skill.
        </p>
      </div>
    </section>
  );
}
