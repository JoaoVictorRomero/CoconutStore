"use client"

import { api } from "~/trpc/react";
import { CardProduto } from "../_components/cardProduto"

export default function Page() {
  const [sla] = api.product.showProduct.useSuspenseQuery();


  return(
    <main>
      <section className="border border-md">
        <header className="flex flex-col max-w-[1280px] m-auto justify-center items-center py-10 gap-y-3"> 
          <h1 className="text-4xl font-bold">Nossos Produtos</h1>
          <h3 className="text-xl text-gray-700">Descubra nossa seleção completa de cocos frescos e produtos especiais</h3>
        </header>
      </section>

      <div className="max-w-[1280px] mr-auto ml-auto mt-5 mb-20 p-6 border rounded-2xl">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]  gap-4 place-content-center ">
          {sla.map((product) => (
            <CardProduto key={product.id} name={product.name} description={product.description} price={product.price} productId={product.id}/>
          ))}
        </div>
      </div>
    </main>

  );
}
