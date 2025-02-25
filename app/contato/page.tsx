import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  PhoneCall,
} from 'lucide-react'
import Link from 'next/link'

export default function ContatoPage() {
  return (
    <div className="flex flex-col gap-8 w-[800px] h-[480px] mx-auto border-4 border-purple-500 rounded-xl bg-purple-100 p-4 my-10">
      <h1 className="text-xl text-center font-semibold">
        Está com alguma dúvida? Entre em contato conosco:
      </h1>
      <div>
        <h2 className="pb-4 text-lg text-center font-semibold">
          Nossas mídias sociais:
        </h2>
        <ul className="cursor-pointer flex justify-center gap-6">
          <li
            title="Clique para ir ao instagram"
            className="flex items-center gap-2 hover:text-pink-600"
          >
            <InstagramIcon />
            <Link
              className="font-semibold"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>
          </li>
          <li
            title="Clique para ir ao facebook"
            className="cursor-pointer flex items-center gap-2 hover:text-blue-600"
          >
            <FacebookIcon />
            <Link
              className="font-semibold"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </Link>
          </li>
          <li
            title="Clique para ir ao whatsapp"
            className="cursor-pointer flex items-center gap-2 hover:text-green-600"
          >
            <PhoneCall />
            <Link
              href="https://wa.me/552100000000000?text=Olá,%20gostaria%20de%20mais%20informações"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold"
            >
              Whatsapp
            </Link>
          </li>
          <li
            title="Clique para ir ao linkedin"
            className="cursor-pointer flex items-center gap-2 hover:text-sky-600"
          >
            <LinkedinIcon />
            <Link
              className="font-semibold"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </li>
        </ul>
        <div className="mt-4 flex flex-col gap-4">
          <h2 className="text-lg text-center font-semibold">
            Ou entre em contato por e-mail:
          </h2>
          <p className="text-lg text-center font-semibold">
            <Link
              className="bg-gray-300 border py-1 px-2 rounded-4xl cursor-pointer"
              href="mailto:maricaImoveis@email.com"
            >
              maricaImoveis@email.com
            </Link>
          </p>
        </div>
        <div className="w-[305px] mx-auto justify-center mt-4">
          <h2 className="pb-4 text-lg text-center font-semibold whitespace-nowrap">
            Venha nos visitar e conhecer nossa loja!
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.9148771814034!2d-42.821874625741074!3d-22.91651033821659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99ed9be4b49009%3A0xcb871b9e5c9244f8!2sR.%20Abreu%20Rangel%2C%20420%20-%20Eldorado%2C%20Maric%C3%A1%20-%20RJ%2C%2024900-890!5e0!3m2!1spt-BR!2sbr!4v1740517914019!5m2!1spt-BR!2sbr"
            width="300"
            height="150"
            className="border-2 border-black rounded-lg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          />
        </div>
      </div>
    </div>
  )
}
