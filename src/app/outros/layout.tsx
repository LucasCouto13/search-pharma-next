import { ReactNode } from 'react'
import '../globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjure,
} from 'next/font/google'
import Cabecalho from '@/components/Cabecalho'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjure = BaiJamjure({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-baiJamjuree',
})

export const metadata = {
  title: 'Search Pharma',
  description: 'Search Pharma - Perto de você',
}
interface OutrosLayoutProps {
  children: ReactNode
}

export default function OutrosLayout({ children }: OutrosLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjure.variable} bg-gray-100 font-sans text-black`}
      >
        <Cabecalho
          nav="nav border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
          medicamento="hidden"
          cosmeticos="hidden"
          outros="hidden"
        />
        {children}
        <footer className="relative bottom-0 mt-20 w-full bg-gray-300 shadow dark:bg-gray-800">
          <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
              © 2023{' '}
              <a href="#" className="hover:underline">
                SearchPharma™
              </a>
              . Todos os direitos reservados.
            </span>
            <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                <a
                  href="http://github.com/LucasCouto13/search-pharma-next"
                  className="mr-4 hover:underline md:mr-6 "
                >
                  Sobre
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  )
}
