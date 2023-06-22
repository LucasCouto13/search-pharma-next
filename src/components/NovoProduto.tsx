'use client'

import api from '@/services/api'
import { useEffect, useState, react } from 'react'
import BarraSucesso from './BarraSucesso'
import { Toast } from 'flowbite-react'

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

export default function Estoque({ edicao, dataProduto }: any) {
  const BASE_URL = '/produtos'
  const [id, setId] = useState()
  const [nome, setNome] = useState('')
  const [tipo, setTipo] = useState('')
  const [categoria, setCategoria] = useState('')
  const [quantidadeEstoque, setQuantidadeEstoque] = useState(0)
  const [preco, setPreco] = useState(0)
  const [imagem, setImagem] = useState('')
  const [catalogo, setCatalogo] = useState(false || true)
  const [notificacaoSucesso, setNotificacaoSucesso] = useState(false)

  const [texto, setTexto] = useState('')

  const verificaTexto = () => {
    if (edicao) setTexto('Produto Editado com Sucesso!')
    return setTexto('Produto Cadastrado com Sucesso!')
  }

  const buscarPorId = (dataProdutoId: any) => {
    console.log('entrou na busca id')
    api
      .get(BASE_URL + `/${dataProdutoId}`)
      .then((res) => {
        setId(res.data.id)
        setNome(res.data.nome)
        setTipo(res.data.tipo)
        setCategoria(res.data.categoria)
        setQuantidadeEstoque(res.data.quantidadeEstoque)
        setPreco(res.data.preco)
        setImagem(res.data.imagem)
        setCatalogo(res.data.catalogo)
        console.log('cat' + catalogo)
      })
      .catch((err) => {
        console.log('deu ruim id' + err)
      })
  }

  useEffect(() => {
    if (edicao) buscarPorId(dataProduto)
  }, [])

  const verificaCheckbox = (event: any): any => {
    return event.target.checked ? setCatalogo(true) : setCatalogo(false)
  }

  const barraSucesso = () => {
    setNotificacaoSucesso(true)
  }

  const enviar = () => {
    verificaTexto()
    const produto: Produto = {
      id,
      nome,
      tipo,
      categoria,
      quantidadeEstoque,
      preco,
      imagem,
      catalogo,
    }
    if (edicao) {
      atualizarProduto(produto)
    } else {
      cadastrarProduto(produto)
    }
  }
  const atualizarProduto = (body: any) => {
    api
      .put(BASE_URL, body)
      .then((res) => {
        barraSucesso()
      })
      .catch((err) => {
        console.log('não atualizou' + err)
      })
  }
  const cadastrarProduto = (body: any) => {
    api
      .post(BASE_URL, body)
      .then((res) => {
        barraSucesso()
        console.log('deu bom')
      })
      .catch((err) => {
        console.log('não cadastrou' + err)
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
                <div className="group relative z-0 mb-6 w-full">
                  <Input
                    label={'Imagem - URL'}
                    value={imagem}
                    updateValue={setImagem}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-1 md:gap-6">
                <div className="group relative z-0 mb-6 w-full">
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      value=""
                      className="peer sr-only"
                      onClick={(event) => verificaCheckbox(event)}
                    ></input>
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-purple-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-purple-800"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Catálogo
                    </span>
                  </label>
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
      {notificacaoSucesso === true && (
        <div className="flex flex-col items-center justify-center gap-4">
          <Toast duration={75}>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-900 text-green-500 dark:bg-green-800 dark:text-green-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="20px"
                height="20px"
              >
                <path
                  fill="#c8e6c9"
                  d="M36,42H12c-3.314,0-6-2.686-6-6V12c0-3.314,2.686-6,6-6h24c3.314,0,6,2.686,6,6v24C42,39.314,39.314,42,36,42z"
                />
                <path
                  fill="#4caf50"
                  d="M34.585 14.586L21.014 28.172 15.413 22.584 12.587 25.416 21.019 33.828 37.415 17.414z"
                />
              </svg>
            </div>
            <div className="ml-3 text-sm font-normal">{texto}</div>
          </Toast>
        </div>
      )}
    </>
  )
}
