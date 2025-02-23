import Image from 'next/image'
import Button from './components/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex mx-auto items-center justify-center">
      <div className='flex flex-col gap-4'>
        <h1 className="text-2xl font-semibold">
          Seu próximo lar está te esperando
        </h1>
        <Link className='text-white px-6 py-2 font-heading mx-auto bg-black border-2 border-white font-semibold rounded-md cursor-pointer hover:bg-purple-950 transition-colors duration-300' href={"/imoveis "}>Buscar uma casa</Link>
      </div>
    </div>
  )
}
