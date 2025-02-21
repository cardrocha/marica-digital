import logo from "@/public/marica.svg";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between text-white gap-8 py-4 px-8 bg-black">
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
          <Link className="hover:underline" href="#" title="ir para Home">
            <li>Home</li>
          </Link>
          <Link className="hover:underline" href="#" title="ir para Sobre">
            <li>Sobre</li>
          </Link>
          <Link className="hover:underline" href="#" title="ir para Entretenimento">
            <li>Casas</li>
          </Link>
          <Link className="hover:underline" href="#" title="ir para Contatos">
            <li>Contatos</li>
          </Link>
          <Link className="hover:underline" href="#" title="ir para Cadastro">
            <li>Cadastro</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
