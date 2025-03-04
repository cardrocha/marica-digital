import Image from 'next/image'
import amparo from '@/public/amparo.jpg'

export default function About() {
  return (
    <main className="flex text-white">
      <figure className="w-full xl:w-[400px] h-full border-r-2 border-r-amber-200">
        <Image src={amparo} alt="igreja nossa senhora do amparo" />
        <figcaption className='bg-black text-center'>Igreja Nossa senhora do Amparo</figcaption>
      </figure>
      <div className='flex flex-col gap-4 w-[1000px] px-5 py-5 xl:px-10 xl:py-10'>
        <h1 className="text-4xl font-semibold bg-gradient-to-r from-purple-900 to-fuchsia-800 bg-clip-text text-transparent">
          A Maricá Imovéis tem a missão de realizar seu sonho
        </h1>
        <p className="text-lg text-center font-semibold bg-gray-700/70 px-7 py-5 rounded-xl text-white">
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
