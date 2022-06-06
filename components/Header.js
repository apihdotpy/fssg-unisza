import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white z-40 border border-slate-900/10 lg:border-none">
      <div className="flex justify-between items-center py-4 max-w-8xl mx-auto px-[6%]">
        <div className="relative h-12 w-[106.25px]">
          <Image
            src="/logo-unisza.jpg"
            alt="logo unisza"
            layout="fill"
            height={314}
            width={834}
          />
        </div>
        <AiOutlineMenu className="lg:hidden" />
        <nav className="hidden lg:block">
          <ol className="flex gap-x-8">
            <li className="text-slate-800 tracking-tight font-medium">
              <Link href="/domestic">
                <a className="relative link-underline hover:text-primary-500 transition">
                  Domestic
                </a>
              </Link>
            </li>
            <li className="text-slate-800 tracking-tight font-medium">
              <Link href="/domestic">
                <a className="relative link-underline hover:text-primary-500 transition">
                  International
                </a>
              </Link>
            </li>
            <li className="text-slate-800 tracking-tight font-medium">
              <Link href="/domestic">
                <a className="relative link-underline hover:text-primary-500 transition">
                  About
                </a>
              </Link>
            </li>
          </ol>
        </nav>
      </div>
    </header>
  );
}
