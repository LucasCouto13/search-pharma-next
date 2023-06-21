'use client'
import TextosH1 from '@/components/TextosH1'
import api from '@/services/api'
import { useEffect, useState } from 'react'
import Tabela from '@/components/Tabela'
import { Dropdown, Button, Modal } from 'flowbite-react'
import NovoProduto from '@/components/NovoProduto'
import { ModalFooter } from 'flowbite-react/lib/esm/components/Modal/ModalFooter'

export default function Estoque() {
  const BASE_URL = '/produtos'
  const [produto, setProduto] = useState()
  const [input, setInput] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [openModal, setOpenModal] = useState<string | undefined>()
  const props = { openModal, setOpenModal }

  useEffect(() => {
    setarPadrao()
  }, [])

  const setarPadrao = () => {
    api
      .get(BASE_URL)
      .then((res) => {
        setProduto(res.data)
      })
      .catch((err) => {
        console.error('deu ruim!' + err)
      })
  }

  const filtrar = (event: any) => {
    event.preventDefault()
    if (input !== '')
      api
        .get(BASE_URL + `/${input}`)
        .then((res) => {
          return setProduto(res.data)
        })
        .catch((err) => {
          console.error('deu ruim!' + err)
        })
    else setarPadrao()
  }

  const filtrarPorTipo = (value: string) => {
    if (value !== '') {
      api
        .get(BASE_URL + `/tipo/${value}`)
        .then((res) => {
          close()
          return setProduto(res.data)
        })
        .catch((err) => {
          console.error('deu ruim!' + err)
        })
    } else setarPadrao()
  }

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev)
  }

  return (
    <>
      <main className="flex">
        <div className="container mx-52">
          <TextosH1
            name="Produtos"
            style="pt-12 pb-5 text-3xl font-bold text-purple-700"
          ></TextosH1>
          <div className="flex flex-row flex-wrap content-evenly items-center justify-between rounded-2xl bg-gray-200 p-3">
            <div className="flex flex-col">
              <form className="px-0">
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
                    className="block h-9 w-96 rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-purple-500 dark:focus:ring-purple-500"
                    placeholder="Search"
                    onChange={(event) => setInput(event.target.value)}
                    required
                  ></input>
                  <button
                    type="submit"
                    className="absolute bottom-1 right-2 rounded-xl bg-purple-700 px-4 py-1 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                    onClick={(event) => filtrar(event)}
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div className="flex flex-col">
              <>
                <div className="flex items-center gap-4">
                  <Dropdown label="Tipos" size="sm" color={'purple'}>
                    <Dropdown.Item
                      onClick={() => {
                        filtrarPorTipo('Medicamento')
                      }}
                    >
                      Medicamento
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        filtrarPorTipo('Cosmetico')
                      }}
                    >
                      Cosmetico
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        filtrarPorTipo('Outros')
                      }}
                    >
                      Outros
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        filtrarPorTipo('')
                      }}
                    >
                      <b>Todos</b>
                    </Dropdown.Item>
                  </Dropdown>
                </div>
              </>
            </div>
            <div className="flex flex-col">Exportar</div>
            <div className="flex flex-col">
              <button onClick={() => props.setOpenModal('default')}>
                <a
                  href="#"
                  className="rounded-lg bg-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                >
                  + Produtos
                </a>
              </button>
            </div>
          </div>
          <Tabela produto={produto} />
        </div>
      </main>

      <Modal
        size={'7xl'}
        show={props.openModal === 'default'}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>
          <TextosH1
            name="Novo Produto"
            style="pt-2 pb-2 text-2xl font-bold text-purple-700"
          ></TextosH1>
        </Modal.Header>
        <Modal.Body>
          <NovoProduto />
        </Modal.Body>
        <ModalFooter></ModalFooter>
      </Modal>
    </>
  )
}
