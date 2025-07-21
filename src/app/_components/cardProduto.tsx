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

export function CardProduto() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center gap-2">
        <CardTitle className="text-2xl">🥥</CardTitle>
      </CardHeader>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Kit Família (6 unidades)</CardTitle>
        <CardDescription>
          Pacote família com 6 cocos frescos 
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl text-center font-bold text-amber-700">R$ 20</p>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full bg-amber-700">
          Adicionar ao carrinho
        </Button>
      </CardFooter>
    </Card>
  )
}
