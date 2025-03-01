'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Property } from '@/types'
import { House, ShowerHead, BedDouble, CarFront } from 'lucide-react'
import imovelImage from '@/public/imovel.jpg'
import Button from '../components/button'

interface ImoveisItemProps {
  property: Property
  setIsModalOpen: (isOpen: boolean) => void
}

export default function ImoveisItem({ property, setIsModalOpen }: ImoveisItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  function handleClickOpen() {
    setIsOpen(!isOpen)
    setIsModalOpen(!isOpen)
  }

  return (
    <>
      <div className="relative flex flex-col gap-4 justify-end p-4 bg-purple-300 rounded-md shadow-md">
        <div className="h-full">
          <Image className="rounded-md" src={imovelImage} alt={property.titulo} />
        </div>
        <h2 className="text-xl text-center font-bold">{property.titulo}</h2>
        <p className="text-lg">{property.descricao}</p>
        <p className="text-lg">
          <span className="font-bold">Endereço:</span> {property.endereco}
        </p>
        <p className="text-lg">
          <span className="font-bold">Preço:</span> {property.preco.toLocaleString()}
        </p>
        <div className="grid grid-cols-2 place-items-center">
          <p className="flex gap-2 items-center text-lg">
            <House />
            Tipo: {property.tipo}
          </p>
          <p className="text-lg flex items-center gap-2">
            <BedDouble />
            Quartos: {property.quartos}
          </p>
          <p className="text-lg flex items-center gap-2">
            <ShowerHead />
            Banheiros: {property.banheiros}
          </p>
          <p className="text-lg flex items-center gap-2">
            <CarFront />
            Garagem: {property.garagem}
          </p>
        </div>
        <Button
          onClick={handleClickOpen}
          className="bg-gradient-to-r from-fuchsia-900 to-purple-800 hover:brightness-200 transition-colors py-2 rounded-sm text-xl text-center font-bold cursor-pointer"
        >
          {property.disponibilidade}
        </Button>
      </div>
    </>
  )
}
