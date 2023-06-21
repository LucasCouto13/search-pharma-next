'use client'
import TextosH1 from '@/components/TextosH1'
import Card from '@/components/Card'
import api from '@/services/api'
import { useEffect, useState } from 'react'

export default function Medicamentos() {
  const BASE_URL = '/produtos'
  const PRODUTO = 'Outros'
  const [card, setCard] = useState()
  const [input, setInput] = useState()

  useEffect(() => {
    setarPadrao()
  }, [])

  const setarPadrao = () => {
    api
      .get(BASE_URL + '/tipo/' + PRODUTO)
      .then((res) => {
        setCard(res.data)
      })
      .catch((err) => {
        console.error('deu ruim!' + err)
      })
  }

  const setarHigienePessoal = (event: any) => {
    if (event.target.checked) {
      api
        .get(BASE_URL + '/categoria/higiene-pessoal')
        .then((res) => {
          setCard(res.data)
        })
        .catch((err) => {
          console.error('deu ruim!' + err)
        })
    } else {
      setarPadrao()
    }
  }

  const setarPeleRosto = (event: any) => {
    if (event.target.checked) {
      api
        .get(BASE_URL + '/categoria/pele-rosto')
        .then((res) => {
          setCard(res.data)
        })
        .catch((err) => {
          console.error('deu ruim!' + err)
        })
    } else {
      setarPadrao()
    }
  }

  const filtrar = (event: any) => {
    event.preventDefault()
    if (input !== '')
      api
        .get(BASE_URL + `/${PRODUTO}/${input}`)
        .then((res) => {
          return setCard(res.data)
        })
        .catch((err) => {
          console.error('deu ruim!' + err)
        })
    else setarPadrao()
  }

  return (
    <>
      <main className="flex">
        <div className="container mx-52">
          <TextosH1
            name="Outros"
            style="pt-12 text-3xl font-bold text-purple-700"
          ></TextosH1>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <TextosH1
                name="Filtros"
                style="pt-10 text-xl font-bold text-purple-700"
              ></TextosH1>

              <div className="mb-4 flex items-center pl-3 pt-3">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="h-4 w-4 rounded border-white bg-white text-purple-600 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  onClick={(event) => setarHigienePessoal(event)}
                ></input>
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Higiene Pessoal
                </label>
              </div>

              <div className="mb-4 flex items-center pl-3">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="h-4 w-4 rounded border-white bg-white text-purple-600 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  onClick={(event) => setarPeleRosto(event)}
                ></input>
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Pele/Rosto
                </label>
              </div>
            </div>
            <div className="flex flex-col p-10">
              <form className="pl-2 pr-7">
                <label className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Search
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 30 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="search"
                    onChange={(event) => setInput(event.target.value)}
                    className="block h-9 w-96 rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-purple-500 dark:focus:ring-purple-500"
                    placeholder="Search"
                    required
                  ></input>
                </div>
              </form>
              <button
                type="submit"
                className="absolute ml-[305px] mt-1 rounded-xl bg-purple-700 px-4 py-1 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                onClick={(event) => filtrar(event)}
              >
                Search
              </button>
              <div className="flex flex-row flex-wrap">
                {card?.map((dataCard: any) => (
                  <Card key={dataCard} dataCard={dataCard} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
