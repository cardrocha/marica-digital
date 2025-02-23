import Image from 'next/image'
import amparo from '@/public/amparo.png'

export default function About() {
  return (
    <main className="flex text-white">
      <div className="w-[400px] h-full border-r-2 border-r-amber-200">
        <Image src={amparo} alt="igreja nossa senhora do amparo" />
      </div>
      <div className='flex flex-col gap-4 w-[1000px] px-10 py-10'>
        <h1 className="text-4xl font-semibold bg-gradient-to-r from-purple-900 to-fuchsia-800 bg-clip-text text-transparent">
          A Maricá Imovéis, tem a missão de realizar seu sonho
        </h1>
        <p className="text-lg font-semibold text-gray-700">
          Com anos de experiência no mercado imobiliário, a Maricá Imóveis se
          destaca pelo compromisso em oferecer as melhores oportunidades para
          quem deseja comprar, vender ou alugar um imóvel. Nossa equipe está
          preparada para tornar seu processo seguro, ágil e satisfatório, sempre
          com transparência e dedicação.
        </p>
      </div>
    </main>
  )
}
