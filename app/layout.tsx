import type { Metadata } from 'next'
import { Montserrat, Oxanium } from 'next/font/google'
import './globals.css'
import Header from './components/header'
import Footer from './components/footer'

const oxanium = Oxanium({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-oxanium',
})

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Maricá Imóveis',
  description: 'Você sonha, nós realizamos!',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className="max-w-full xl:max-w-[1360px] xl:mx-auto antialiased flex flex-col min-h-screen overflow-y-scroll">
        <Header />
        <main className="flex flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
