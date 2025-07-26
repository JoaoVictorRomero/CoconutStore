"use client"
import { api } from "~/trpc/react"

function ProdutosNoCarrinho({productId, quantity}) {
  const [produto] = api.product.getProduct.useSuspenseQuery({prodId: productId})
  const utils = api.useUtils();

  const deletar = api.product.deleteCartItem.useMutation({
    onSuccess: async () => {
      await utils.product.invalidate();
    }
  })

  return(
    <div className="border-solid p-5">
      <h1>{produto?.name} - Quantidade:{quantity}</h1> 
      <p>R$ {produto?.price}</p>
      <p>{produto?.description}</p>
      <button onClick={() => deletar.mutate({prodId: productId})}>Deletar</button>
    </div>
  )
}

export default function Carrinho() {
  const [listaDeProdutos] = api.product.showCartItems.useSuspenseQuery();

  return(
    <>
      {listaDeProdutos.map(produto => <ProdutosNoCarrinho key={produto.id} productId={produto.productId} quantity={produto.quantity}/> )}
    </>
  )
}
