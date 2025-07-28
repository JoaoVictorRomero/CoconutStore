"use client"
import { api } from "~/trpc/react"
import { CardProduto } from "./cardProduto";

export function MostSoldItems() {
  const [itensMaisVendidos] = api.product.getThreeMostSold.useSuspenseQuery();

  return(
    <>
      <section>
        <section className="max-w-[1280px] m-auto p-10">
          <header className="flex flex-col justify-center items-center py-12 gap-y-3">
            <h1 className="font-bold text-4xl">Produtos Mais Vendidos</h1>
            <h3 className="text-[#4B5563] text-lg">Conheça os favoritos dos nossos clientes</h3>
          </header>

          <section className="flex flex-col md:flex-row gap-x-4 justify-center items-center gap-y-4">
            {itensMaisVendidos.map(produto => 
            <CardProduto name={produto.name} description={`Vendido mais de ${produto.bought} vezes`} price={produto.price}/>
            )}
          </section>

        </section>
      </section>
    </>
  )
}
