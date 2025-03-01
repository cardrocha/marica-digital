'use client';

import { headerLinks } from "@/config/headerLinks";
import logo from "@/public/marica.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between text-white gap-8 py-4 px-8 bg-gradient-to-r from-fuchsia-900 to-purple-800 shadow-2xl">
      <Link href="#" title="Clique aqui" className="flex items-center gap-4">
        <Image
          className="rounded-md w-18 h-12 object-contain" // Ajuste o tamanho aqui
          src={logo}
          alt="Logo do Maricá Digital"
        />
        <h1 className="text-2xl">Maricá Imóveis</h1>
      </Link>
      <nav>
        <ul className="flex gap-10">
          {headerLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              title={link.title}
              className={`link ${
                pathname === `${link.href}`
                  ? "text-xl px-2 border-b-3 border-b-purple-500 bg-purple-400 rounded-br-2xl rounded-tl-2xl text-black font-semibold hover:underline"
                  : "text-xl font-semibold text-white hover:underline"
              }`}
            >
              {link.text}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}