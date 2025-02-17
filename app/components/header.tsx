export default function Header() {
  return ( 
    <header className="flex items-center justify-between text-white gap-8 py-4 px-8 bg-black">
      <h1>Maricá Digital</h1>
      <nav>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>Sobre</li>
          <li>Entretenimento</li>
          <li>Esportes</li>
          <li>Contato</li>
          <li>Cadastro</li>
        </ul>
      </nav>
    </header>
  );
}