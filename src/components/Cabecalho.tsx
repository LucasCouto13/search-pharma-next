'use client'
import Router, { useRouter } from 'next/navigation'

export default function Cabecalho(props: any) {
  const router = useRouter()

  return (
    <>
      <nav className={props.nav}>
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          {/* LOGO */}
          <a href="/" className="flex items-center">
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              LOGO
            </span>
          </a>

          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
              {/* Botao Lateral */}

              <li
                className={props.barraLateral}
                onClick={() => router.push('/estoque')}
              >
                <a
                  href="#"
                  className="block rounded text-purple-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25 6.75H11C8.65279 6.75 6.75 8.65279 6.75 11V25C6.75 27.3472 8.65279 29.25 11 29.25H25C27.3472 29.25 29.25 27.3472 29.25 25V11C29.25 8.65279 27.3472 6.75 25 6.75Z"
                      fill="black"
                    />
                    <path
                      d="M53 6.75H39C36.6528 6.75 34.75 8.65279 34.75 11V25C34.75 27.3472 36.6528 29.25 39 29.25H53C55.3472 29.25 57.25 27.3472 57.25 25V11C57.25 8.65279 55.3472 6.75 53 6.75Z"
                      fill="black"
                    />
                    <path
                      d="M25 34.75H11C8.65279 34.75 6.75 36.6528 6.75 39V53C6.75 55.3472 8.65279 57.25 11 57.25H25C27.3472 57.25 29.25 55.3472 29.25 53V39C29.25 36.6528 27.3472 34.75 25 34.75Z"
                      fill="black"
                    />
                    <path
                      d="M53 34.75H39C36.6528 34.75 34.75 36.6528 34.75 39V53C34.75 55.3472 36.6528 57.25 39 57.25H53C55.3472 57.25 57.25 55.3472 57.25 53V39C57.25 36.6528 55.3472 34.75 53 34.75Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
