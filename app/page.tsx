import Image from 'next/image'
import Button from './components/button'

export default function Home() {
  return (
    <main className="flex mx-auto items-center justify-center">
      <div className='flex flex-col gap-4'>
        <h1 className="text-2xl font-semibold">
          Seu próximo lar está te esperando
        </h1>
        <Button>Buscar uma casa</Button>
      </div>
    </main>
  )
}
