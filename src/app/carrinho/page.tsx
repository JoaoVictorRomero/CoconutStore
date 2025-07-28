"use client"
import { api } from "~/trpc/react"
import { Carrinho_Compra } from "../_components/carrinho_compre";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { toast, Toaster } from "sonner";
import { addBoughtItem } from "../_components/actions";
import Link from "next/link";


function ProdutosNoCarrinho({productId, quantity}) {
  const [produto] = api.product.getProduct.useSuspenseQuery({prodId: productId})
  const utils = api.useUtils();

  const [count, setCount] = useState(quantity);

  const addCart = api.product.addToCart.useMutation({
    onSuccess: async () => {
      await utils.product.invalidate();
      setCount(count + 1);
    }
  });

  const removeCart = api.product.remoteToCart.useMutation({
    onSuccess: async () => {
      await utils.product.invalidate();
      setCount(count - 1);
    }
  });

  const deletar = api.product.deleteCartItem.useMutation({
    onSuccess: async () => {
      await utils.product.invalidate();
    }
  })

  return(
    <div className="border-solid p-5">
      <div className="flex flex-col md:flex-row border rounded-md shadow-sm p-5 gap-x-10">
        <figure className="flex justify-center items-center">
          <p className="text-5xl ">🥥</p>
        </figure>

        <header className="flex flex-col w-full items-center  md:items-start justify-center md:justify-normal py-5">
          <h1 className="font-semibold ">{produto?.name}</h1>
          <p className="text-orange-700 font-bold text-xl">R$ {produto?.price} </p>
          <p className="text-gray-500 text-sm">{produto?.description}</p>
        </header>

        <section className="flex w-full gap-x-3  items-center justify-center md:justify-end">
          <button onClick={() => count <= 1 ? deletar.mutate({prodId: productId}) : removeCart.mutate({productId: productId})} className="bg-white border border-bg-gray-400 rounded-md px-4 py-2 font-bold text-lg hover:bg-gray-200 cursor-pointer transition duration-300"> - </button>
          <p className="justify-center">{count}</p>
          <button onClick={() => addCart.mutate({productId: productId})} className="bg-white border border-bg-gray-400 rounded-md px-4 py-2 font-bold text-lg hover:bg-gray-200 cursor-pointer transition duration-300"> + </button>
          <button className="hover:bg-red-200 p-3 transition duration-400 border cursor-pointer border-white rounded-md" onClick={() => deletar.mutate({prodId: productId})}>🗑️</button>
        </section>
         
      </div>
    </div>
  )
}

function SemCarrinho() {
  return(
    <>
      <main className="m-auto">

        <section className="max-w-[1280px] h-full m-auto py-15">
            <header className="flex flex-col font-semibold justify-center items-center">
              <h1 className="text-2xl">Seu carrinho está vazio!</h1>
              <h2 className="text-xl">Aproveite nossas ofertas e encha-o de coisas incríveis.</h2>
              <p className="text-lg text-gray-500 pt-5">Não deixe seu carrinho esperando! Veja nossos lançamentos e promoções especiais.</p>
            </header>
            <section className="flex justify-center items-center py-5">
              <button className="bg-orange-600 text-white border rounded-md text-xl py-3 px-10"><Link href ="../produtos">🛒 Explorar Produtos</Link></button>
            </section>
          </section>
        
      </main>
    </>
  )
}

export default function Carrinho() {
  const [listaDeProdutos] = api.product.showCartItems.useSuspenseQuery();
  const utils = api.useUtils();
  const deletarTudo = api.product.deleteAllCartItem.useMutation({
    onSuccess: async () => {
      utils.product.invalidate();
    }
  });
  const aumentarComprado = api.product.addBoughtItem.useMutation();

  return(
    <>
        { listaDeProdutos?.length ? 
      <Carrinho_Compra>
        {listaDeProdutos.map(produto => <ProdutosNoCarrinho key={produto.id} productId={produto.productId} quantity={produto.quantity}/> )}

          <Button className="w-full bg-amber-700" asChild>
            <button onClick={() => {toast("Pedido enviado com sucesso", {
              description: "Aguarde alguns segundos para processamos a compra",
              action: {
                label: "Entendido",
                onClick: () => deletarTudo.mutate(),
              },
            }); deletarTudo.mutate();

            {listaDeProdutos.map(produto => {aumentarComprado.mutate({prodId: produto.productId, itemQuantity: produto.quantity});})}
            }} >Finalizar pedido</button>
          </Button>
          <Toaster/>
        </Carrinho_Compra>
        : <SemCarrinho/>
      }


    </>
  )
}
