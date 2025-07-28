import { Button } from "~/components/ui/button"
import { signIn, signOut, auth } from "~/server/auth"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import Link from "next/link"

function Logado({image, name}) {
  return(
      <DropdownMenu>
        <DropdownMenuTrigger className="flex cursor-pointer">
          <Avatar className="w-[40px] h-[40px]">
            <AvatarImage src={image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        <header className="flex justify-center items-center px-3">
          <h1>{name} <span className="text-gray-400 text-sm pb-2">v</span></h1>
        </header>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem><Link href="../carrinho">Carrinho</Link></DropdownMenuItem>
          <DropdownMenuItem>Histórico</DropdownMenuItem>
          <DropdownMenuItem> 
            <form
              action={async () => {
                "use server"
                await signOut()
              }}
            >
              <button className="cursor-pointer" type="submit">Sair</button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  )
}
function Cadastrar() {
  return (
      <form
        action={async () => {
          "use server"
          await signIn("discord")
        }}
      >
        <Button variant="outline" size="lg">
          Logar pelo Discord
        </Button>
      </form>
  )
}
 
export default async function Logar() {
  const session = await auth();

  return (
    <>
      <section className="flex">
        {session?.user ? <Logado name={session.user.name} image={session.user.image} /> : <Cadastrar/>}
      </section>
    </>
  )
} 
