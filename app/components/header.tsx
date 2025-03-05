'use client'

import { headerLinks } from '@/config/headerLinks'
import logo from '@/public/marica.svg'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="relative flex items-center justify-between text-white gap-8 py-4 px-8 bg-gradient-to-r from-fuchsia-900 to-purple-800 shadow-2xl">
      <Menu
        onClick={() => setOpen(!open)}
        className="md:hidden absolute right-5 text-4xl cursor-pointer"
      />
      <Link href="#" title="Clique aqui" className="flex items-center gap-4">
        <Image
          className="rounded-md w-14 md:w-18 h-12 object-contain" // Ajuste o tamanho aqui
          src={logo}
          alt="Logo do Maricá Digital"
        />
        <h1 className="text-xl md:text-2xl whitespace-nowrap">
          Maricá Imóveis
        </h1>
      </Link>
      <nav>
        <ul className="hidden md:flex gap-10">
          {headerLinks.map(link => (
            <Link
              key={link.id}
              href={link.href}
              title={link.title}
              className={`link ${
                pathname === `${link.href}`
                  ? 'text-xl px-2 border-b-3 border-b-purple-500 bg-purple-400 rounded-br-2xl rounded-tl-2xl text-black font-semibold hover:underline'
                  : 'text-xl font-semibold text-white hover:underline'
              }`}
            >
              {link.text}
            </Link>
          ))}
        </ul>
      </nav>
      <nav
        className={`transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'} md:hidden fixed top-0 right-0 w-40 h-full border-l-2 bg-purple-800 z-10`}
      >
        <Menu
          onClick={() => setOpen(!open)}
          className="absolute top-5 left-16 md:hidden right-5 mb-5 text-4xl cursor-pointer"
        />
        <ul className="flex flex-col pt-20 items-center gap-3 lg:gap-6">
          {headerLinks.map(link => (
            <Link
              key={link.id}
              title={link.title}
              href={link.href}
              className={`link ${
                pathname === `${link.href}`
                  ? 'text-xl px-2 border-b-3 border-b-purple-500 bg-purple-400 rounded-br-2xl rounded-tl-2xl text-black font-semibold hover:underline'
                  : 'text-xl font-semibold text-white hover:underline'
              }`}
            >
              {link.text}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  )
}
