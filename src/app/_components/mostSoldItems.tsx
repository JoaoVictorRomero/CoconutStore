"use client"
import { api } from "~/trpc/react"
import { CardProduto } from "./cardProduto";

export function MostSoldItems() {
  const [itensMaisVendidos] = api.product.getThreeMostSold.useSuspenseQuery();

  return(
    <>
      <section className="py-4">
        <section className="bg-amber-200 rounded-2xl max-w-[1280px] m-auto p-5">
          <header className="flex flex-col justify-center items-center py-5 gap-y-3 text-center">
            <h1 className="font-bold text-4xl">Produtos Mais Vendidos</h1>
            <h3 className="text-[#4B5563] text-lg">Conheça os favoritos dos nossos clientes</h3>
          </header>

          <section className="flex flex-col md:flex-row gap-x-4 justify-center items-center gap-y-4">
            {itensMaisVendidos.map(produto => 
            <CardProduto productId={produto.id} name={produto.name} description={`Top seller com mais de unidades ${produto.bought} vendidas`} price={produto.price}/>
            )}
          </section>

        </section>
      </section>
    </>
  )
}
