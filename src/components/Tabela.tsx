export default function Tabela({ produto, props, produtoProps, edicao }: any) {
  const verificaCatalogo = (dataProduto: any): any => {
    if (dataProduto.catalogo) {
      return (
        <>
          <div className="text-purple-700">
            <b>ON</b>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className="text-gray-700">OFF</div>
        </>
      )
    }
  }
  return (
    <>
      <div className="relative w-full overflow-x-auto rounded-lg pt-6">
        <table className="w-full text-left text-sm text-gray-700 dark:text-gray-700">
          <thead className="dark:bg-gray bg-purple-200 text-xs uppercase text-gray-700 text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Produto
              </th>
              <th scope="col" className="px-6 py-3">
                Tipo
              </th>
              <th scope="col" className="px-6 py-3">
                Categoria
              </th>
              <th scope="col" className="px-6 py-3">
                Estoque
              </th>
              <th scope="col" className="px-6 py-3">
                Preço
              </th>
              <th scope="col" className="px-6 py-3">
                Catálogo
              </th>
              <th scope="col" className="px-2 py-3"></th>
              <th scope="col" className="px-2 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {produto?.map((dataProduto: any) => (
              <tr
                key={dataProduto.id}
                className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  {dataProduto.nome}
                </th>
                <td className="px-6 py-4">{dataProduto.tipo}</td>
                <td className="px-6 py-4">{dataProduto.categoria}</td>
                <td className="px-6 py-4">{dataProduto.quantidadeEstoque}</td>
                <td className="px-6 py-4">{dataProduto.preco}</td>
                <td className="px-6 py-4">
                  <p>
                    <b>
                      <>
                        <label className="relative inline-flex cursor-pointer items-center">
                          <input
                            type="checkbox"
                            value=""
                            className="peer sr-only"
                          ></input>
                          <div>{verificaCatalogo(dataProduto)}</div>
                        </label>
                      </>
                    </b>
                  </p>
                </td>
                <td className="px-1 py-4 ">
                  <button
                    onClick={() => {
                      props.setOpenModal('default')
                      produtoProps(dataProduto.id)
                      edicao(true)
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0,0,256,256"
                      width="23"
                      height="23"
                      fillRule="nonzero"
                    >
                      <g
                        fill="#000000"
                        fillRule="nonzero"
                        stroke="none"
                        strokeWidth="1"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="10"
                        strokeDasharray=""
                        strokeDashoffset="0"
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                      >
                        <g transform="scale(5.33333,5.33333)">
                          <path d="M38.657,18.536l2.44,-2.44c2.534,-2.534 2.534,-6.658 0,-9.193c-1.227,-1.226 -2.858,-1.9 -4.597,-1.9c-1.739,0 -3.371,0.675 -4.597,1.901l-2.439,2.439zM27.343,11.464l-18.069,18.069c-0.385,0.385 -0.678,0.86 -0.848,1.375l-3.35,10.121c-0.179,0.538 -0.038,1.131 0.363,1.532c0.287,0.286 0.669,0.439 1.061,0.439c0.158,0 0.317,-0.025 0.472,-0.076l10.118,-3.351c0.517,-0.17 0.993,-0.463 1.378,-0.849l18.068,-18.068z"></path>
                        </g>
                      </g>
                    </svg>
                  </button>
                </td>
                <td className="px-2 py-4 ">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0,0,256,256"
                      width="23px"
                      height="23px"
                      fillRule="nonzero"
                    >
                      <g
                        fill="#c70d0d"
                        fillRule="nonzero"
                        stroke="none"
                        strokeWidth="1"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="10"
                        strokeDasharray=""
                        strokeDashoffset="0"
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                      >
                        <g transform="scale(8.53333,8.53333)">
                          <path d="M14.98438,2.48633c-0.55152,0.00862 -0.99193,0.46214 -0.98437,1.01367v0.5h-5.5c-0.26757,-0.00363 -0.52543,0.10012 -0.71593,0.28805c-0.1905,0.18793 -0.29774,0.44436 -0.29774,0.71195h-1.48633c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h18c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587h-1.48633c0,-0.26759 -0.10724,-0.52403 -0.29774,-0.71195c-0.1905,-0.18793 -0.44836,-0.29168 -0.71593,-0.28805h-5.5v-0.5c0.0037,-0.2703 -0.10218,-0.53059 -0.29351,-0.72155c-0.19133,-0.19097 -0.45182,-0.29634 -0.72212,-0.29212zM6,9l1.79297,15.23438c0.118,1.007 0.97037,1.76563 1.98438,1.76563h10.44531c1.014,0 1.86538,-0.75862 1.98438,-1.76562l1.79297,-15.23437z"></path>
                        </g>
                      </g>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
