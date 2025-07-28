"use client"

import { api } from "~/trpc/react";
import { CardProduto } from "../_components/cardProduto"
import { Pre_footer } from "../_components/pre_footer";
import { MostSoldItems } from "../_components/mostSoldItems";

export default function Page() {
  const [sla] = api.product.showProduct.useSuspenseQuery();


  return(
    <main className="bg-gradient-to-b from-white to-[#ebebebd7]">
      <section className="border border-md p-5 bg-[#fff8e1]">
        <header className="flex flex-col max-w-[1280px] m-auto justify-center items-center py-10 gap-y-3 text-center"> 
          <h1 className="text-4xl font-bold">Nossos Produtos</h1>
          <h3 className="text-xl text-gray-700">Descubra nossa seleção completa de cocos frescos e produtos especiais</h3>
        </header>
      </section>

      <div className="bg-white max-w-[1280px] mr-auto ml-auto mt-5 mb-0 p-6 border rounded-2xl">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]  gap-4 place-content-center ">
          {sla.map((product) => (
            <CardProduto key={product.id} name={product.name} description={product.description} price={product.price} productId={product.id}/>
          ))}
        </div>
      </div>
      <MostSoldItems/>
      <Pre_footer
      tipo = "Por que Escolher a CoconutStore?"/>
    </main>

  );
}
