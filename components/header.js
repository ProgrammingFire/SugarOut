import Image from "next/image";
import Link from "next/link";
import HeaderMenu from "./menu";
import { useEffect, useState } from "react";
// import SearchBar from "./searchbar";

export default function Header() {
  return (
    <nav class="flex justify-between dark:bg-nav-dark items-center bg-nav-light text-black nav-shadow dark:text-white p-3 py-5 sticky top-0 w-full z-20">
      <div>
        <h1 class="font-mono italic font-bold text-2xl cursor-pointer hover:text-blue-400 transition-colors ml-3">
          <Link href="/">SugarOut</Link>
        </h1>

        {/* <Link href="/">
          <Image width="200" height="50" src="/Logo.jpeg" />
        </Link> */}
      </div>
      <div class="nav-list">
        <Link href="products">
          <span class="border-4 hover:bg-blue-300 hover:text-black hover:border-transparent transition-all p-2 px-4 rounded-lg hover:drop-shadow-2xl hover:translate-y-[-3px] border-blue-300 cursor-pointer mr-2">
            Products
          </span>
        </Link>
        <Link href="/services">
          <span class="border-4 hover:bg-blue-300 hover:text-black hover:border-transparent transition-all p-2 px-4 rounded-lg hover:drop-shadow-2xl hover:translate-y-[-3px] border-blue-300 cursor-pointer mr-2">
            Services
          </span>
        </Link>
        <Link href="/blog">
          <span class="border-4 hover:bg-blue-300 hover:text-black hover:border-transparent transition-all p-2 px-4 rounded-lg hover:drop-shadow-2xl hover:translate-y-[-3px] border-blue-300 cursor-pointer mr-2">
            Blog
          </span>
        </Link>
        <Link href="/about">
          <span class="border-4 hover:bg-blue-300 hover:text-black hover:border-transparent transition-all p-2 px-4 rounded-lg hover:drop-shadow-2xl hover:translate-y-[-3px] border-blue-300 cursor-pointer">
            About
          </span>
        </Link>
      </div>
      <ul class="mr-3 hidden menu-list">
        <HeaderMenu></HeaderMenu>
      </ul>
    </nav>
  );
}
