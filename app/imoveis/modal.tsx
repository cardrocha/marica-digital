import { useActionState } from 'react'
import { type FormState, SubmitForm } from '../lib/action'
import Button from '../components/button'

interface ModalProps {
  openModal: boolean
  onClick: () => void
}

const initialState: FormState = {
  error: false,
  success: false,
  message: "",
};

export default function ModalItem({ openModal, onClick }: ModalProps) {
  const [state, SubmitFormAction, pending] = useActionState(SubmitForm, initialState);

  return (
    <>
      {openModal && (
        <div className="fixed flex flex-col gap-5 p-5 justify-center items-center top-40 xl:top-60 left-0 xl:left-80 bg-black/80 rounded-xl w-full xl:w-[650px] h-[300px] xl:h-[250px] z-10">
          {state?.success ? (
            <div className="flex flex-col gap-5 items-center">
              <p className="text-green-400 text-center text-xl">{state.message}</p>
              <Button onClick={onClick}>Fechar</Button>
            </div>
          ) : (
            <>
              <h1 className="text-xl text-center xl:text-2xl text-white">
                Deixe seu contato e entraremos em contato:
              </h1>

              <form
                className="flex flex-col gap-2 items-end"
                action={SubmitFormAction}
              >
                <div className="flex gap-2">
                  <label className="text-xl text-white" htmlFor="name">
                    Nome:
                  </label>
                  <input
                    className="px-2 py-1 bg-gray-100 placeholder-gray-600 rounded-sm"
                    placeholder="Digite seu nome"
                    type="text"
                    name="name"
                    id="name"
                  />
                </div>

                <div className="flex gap-2">
                  <label className="text-xl text-white" htmlFor="tel">
                    Telefone:
                  </label>
                  <input
                    className="px-2 py-1 bg-gray-100 placeholder-gray-600 rounded-sm"
                    placeholder="Ex: 1199999999"
                    type="tel"
                    name="tel"
                    id="tel"
                    pattern="^\d{2}9?\d{8}$"
                  />
                </div>

                {state?.error && (
                  <p className="text-red-400 text-xl">{state.message}</p>
                )}
                <div className="flex gap-3 w-[300px] mt-2 justify-between">
                  <Button type="submit" disabled={pending}>
                    {pending ? 'Enviando...' : 'Enviar'}
                  </Button>
                  <Button onClick={onClick}>Cancelar</Button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </>
  )
}
