import type { Property } from '@/types'
import imoveis from '@/data/properties.json'
import ImoveisItem from './imoveis-Item'

export default function ImoveisPage() {
  return (
    <section className="container mx-auto p-2">
      <h2 className='text-center text-4xl font-bold'>~ Seu novo lar está aqui ~</h2>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        {imoveis.map((property: Property) => (
          <ImoveisItem key={property.id} property={property} />
        ))}
      </div>
    </section>
  )
}
