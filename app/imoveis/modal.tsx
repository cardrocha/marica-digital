import type { ComponentProps } from 'react'
import Button from '../components/button'

interface ModalProps {
  openModal: boolean
  onClick: () => void
}

export default function ModalItem({ openModal, onClick }: ModalProps) {
  return (
    <>
      {openModal && (
        <div className="fixed flex flex-col gap-10 p-5 justify-baseline items-center top-60 left-80 bg-black/80 rounded-xl w-[700px] h-[200px] z-10">
          <h1 className='text-2xl text-white'>Deixe seu contato e entraremos em contato</h1>
          <form className='flex gap-2' action="">
            <label className='text-xl text-white' htmlFor="name">Nome:</label>
            <input className="flex-1 px-1 bg-gray-100 placeholder-gray-600 rounded-sm" placeholder='Digite seu nome' type="text" name="name" id="name" />
            <label className='text-xl text-white' htmlFor="tel">Telefone:</label>
            <input className="flex-1 px-1 bg-gray-100 placeholder-gray-600 rounded-sm" placeholder='Digite seu número' type="tel" name="tel" id="tel" />
          </form>
          <Button onClick={onClick}>Cancelar</Button>
        </div>
      )}
    </>
  )
}
