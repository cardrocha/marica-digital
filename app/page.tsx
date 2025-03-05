import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex mx-auto items-center justify-center">
      <div className="flex flex-col gap-4">
        <h1 className="font-heading text-3xl md:text-4xl font-semibold text-center">
          Seu próximo lar está te{' '}
          <span className="bg-purple-700/80 px-1 text-purple-200 rounded-br-2xl rounded-tl-2xl">
            esperando
          </span>
        </h1>
        <Link
          className="text-white px-6 py-2 font-heading mx-auto bg-black border-2 border-purple-500 font-semibold rounded-tr-2xl rounded-bl-2xl cursor-pointer hover:bg-purple-950 transition-colors duration-300"
          href={'/imoveis '}
        >
          Buscar uma casa
        </Link>
      </div>
    </div>
  )
}
