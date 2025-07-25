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

function Logado({image, name}) {
  return(
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Carrinho</DropdownMenuItem>
          <DropdownMenuItem>Histórico</DropdownMenuItem>
          <DropdownMenuItem> 
            <form
              action={async () => {
                "use server"
                await signOut()
              }}
            >
              <button type="submit">Sair</button>
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
        <Button variant="outline" size="sm">
          Logar pelo Discord
        </Button>
      </form>
  )
}
 
export default async function Logar() {
  const session = await auth();

  return (
    <>
      {session?.user ? <Logado name={session.user.name} image={session.user.image} /> : <Cadastrar/>}
    </>
  )
} 
