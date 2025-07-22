"use client"

import { api } from "~/trpc/react";
import { CardProduto } from "../_components/cardProduto"

export default function Page() {
  const [sla] = api.product.showProduct.useSuspenseQuery();


  return(
    <div className="max-w-[1280px] m-auto pt-6 px-4">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]  gap-4 place-content-center ">
        {sla.map((product) => (
          <p>{product.name}</p>
        ))}
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
      </div>
    </div>
  );
}
