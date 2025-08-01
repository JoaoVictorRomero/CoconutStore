import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { Label } from "~/components/ui/label"
import { handleAddCart } from "./actions"
import { api } from "~/trpc/react"

export function CardProduto({name, description, price, productId}) {
  const utils = api.useUtils();
  const addCart = api.product.addToCart.useMutation({
    onSuccess: async () => {
      utils.product.invalidate();
    }
  });

  return (
    <Card className="w-full max-w-sm transition duration-150 ease-in-out hover:scale-105 hover:text-blue-500">
      <CardHeader className="text-center">
        <CardTitle className="text-5xl">🥥</CardTitle>
      </CardHeader>
      <CardHeader className="text-center ">
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl text-center font-bold text-amber-700">R$ {price}</p>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full bg-amber-700" asChild>
          <button className="cursor-pointer" onClick={() => addCart.mutate({productId})}>
            {addCart.isPending ? "Adicionando..." : "Adicionar ao carrinho"}
          </button>
        </Button>
      </CardFooter>
    </Card>
  )
}
