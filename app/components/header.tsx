'use client'

import { headerLinks } from "@/config/headerLinks";
import logo from "@/public/marica.svg";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  
  return (
    <header className="flex items-center justify-between text-white gap-8 py-4 px-8 bg-purple-800 shadow-2xl">
      <Link href="#" title="clique aqui" className="flex items-center gap-4">
        <Image
          className="rounded-md"
          src={logo}
          width={48}
          height={48}
          alt="Logo do Maricá Digital"
        />
        <h1 className="text-2xl">Maricá Imóveis</h1>
      </Link>
      <nav>
        <ul className="flex gap-4">
        {headerLinks.map((link) => (
          <Link key={link.id}
            href={link.href} 
            title={link.title}
            className={`link ${pathname === `${link.href}` ? "text-xl text-black font-semibold hover:underline" : "text-xl font-semibold text-white hover:underline"}`}
            >
            {link.text}
          </Link>
        ))}
        </ul>
      </nav>
    </header>
  );
}
