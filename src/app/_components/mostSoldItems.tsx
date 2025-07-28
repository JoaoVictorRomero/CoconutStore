"use client"
import { api } from "~/trpc/react"
import { CardProduto } from "./cardProduto";

export function MostSoldItems() {
  const [itensMaisVendidos] = api.product.getThreeMostSold.useSuspenseQuery();

  return(
    <>
      <p></p>
      {itensMaisVendidos.map(produto => 
      <CardProduto name={produto.name} description={`Vendido mais de ${produto.bought} vezes`} price={produto.price}/>
      )}
    </>
  )
}
