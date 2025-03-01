'use client'

import { useState } from 'react'
import type { Property } from '@/types'
import imoveis from '@/data/properties.json'
import ImoveisItem from './imoveis-Item'
import ModalItem from './modal'

export default function ImoveisPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function HandleClickModal() {
    setIsModalOpen(false)
  }

  return (
    <section className="container mx-auto p-2 relative">
      <h2 className="font-heading text-center underline text-purple-950 text-4xl font-bold py-2">
        ~ Seu novo lar está aqui ~
      </h2>

      <div
        className={`grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 ${isModalOpen ? 'pointer-events-none' : ''}`}
      >
        {imoveis.map((property: Property) => (
          <ImoveisItem
            key={property.id}
            property={property}
            setIsModalOpen={setIsModalOpen}
          />
        ))}
      </div>

      {isModalOpen && (
        <ModalItem openModal={isModalOpen} onClick={HandleClickModal} />
      )}
    </section>
  )
}
