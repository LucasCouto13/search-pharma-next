'use client'
import TextosH1 from '@/components/TextosH1'
import api from '@/services/api'
import { useEffect, useState } from 'react'

interface ProdutoValues {
  label: string
  value: string | number
  updateValue: (value: any) => void
}

const Input = ({ label, value, updateValue }: ProdutoValues) => {
  return (
    <>
      <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">
        {label}
      </label>
      <input
        value={value}
        className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
        onChange={(event) => updateValue(event.target.value)}
      ></input>
    </>
  )
}

export default function Estoque() {
  const BASE_URL = '/produtos'
  const [nome, setNome] = useState('')
  const [tipo, setTipo] = useState('')
  const [categoria, setCategoria] = useState('')
  const [quantidadeEstoque, setQuantidadeEstoque] = useState(0)
  const [preco, setPreco] = useState(0)

  const barraErro = (error: any): any => {
    ;<>
      <div
        id="toast-warning"
        className="flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400"
        role="alert"
      >
        <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Warning icon</span>
        </div>
        <div className="ml-3 text-sm font-normal">{{ error }}</div>
        <button
          type="button"
          className="-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
          data-dismiss-target="#toast-warning"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </>
  }

  const barraSucesso = () => {
    ;<>
      <div
        id="toast-success"
        className="mb-4 flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400"
        role="alert"
      >
        <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Check icon</span>
        </div>
        <div className="ml-3 text-sm font-normal">Item moved successfully.</div>
        <button
          type="button"
          className="-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
          data-dismiss-target="#toast-success"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </>
  }

  const enviar = () => {
    const produto: Produto = {
      nome,
      tipo,
      categoria,
      quantidadeEstoque,
      preco,
    }
    console.log(produto)
    cadastrarProduto(produto)
  }

  const cadastrarProduto = (body: any) => {
    api
      .post(BASE_URL, body)
      .then((res) => {
        barraSucesso()
        console.log('deu bom')
      })
      .catch((err) => {
        barraErro(err)
        console.log('deu ruim')
      })
  }
  return (
    <>
      <main className="flex">
        <div className="container mx-52">
          <div className=" bg-white bg-opacity-50 p-3">
            <form>
              <div className="grid md:grid-cols-3 md:gap-6">
                <div className="group relative z-0 mb-6 w-full">
                  <Input
                    label={'Nome do Produto'}
                    value={nome}
                    updateValue={setNome}
                  />
                </div>
                <div className="group relative z-0 mb-6 w-full">
                  <Input
                    label={'Tipo do Produto'}
                    value={tipo}
                    updateValue={setTipo}
                  />
                </div>
                <div className="group relative z-0 mb-6 w-full">
                  <Input
                    label={'Categoria'}
                    value={categoria}
                    updateValue={setCategoria}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-3 md:gap-6">
                <div className="group relative z-0 mb-6 w-full">
                  <Input
                    label={'Quantidade de Estoque'}
                    value={quantidadeEstoque}
                    updateValue={setQuantidadeEstoque}
                  />
                </div>
                <div className="group relative z-0 mb-6 w-full">
                  <Input label={'Preço'} value={preco} updateValue={setPreco} />
                </div>
              </div>
            </form>
            <button>
              <a
                href="#"
                className="rounded-lg bg-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                onClick={enviar}
              >
                Adicionar
              </a>
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
