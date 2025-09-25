"use client";

import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-100 dark:bg-zinc-900 text-center">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-3xl xl:text-4xl font-sans pb-5 z-10 font-bold tracking-tight ">
        Contact
      </h2>
      <div className="flex items-center justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/robyn-walsh-5b890a29b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://www.instagram.com/r24byn/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition"
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </footer>
  );
}
