import { Button } from "src/components/ui/button"
import Logar from "./auth"


function ShoppingCart() {
  return(
    <>
      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
    </>
  )
}

export function Navbar() {
  return(
    <div className="bg-orange-50 font-sans">
      <nav className="flex h-12  max-w-[1280px] m-auto">
        <ul className="basis-1/3 flex justify-start items-center">
          <li className="text-xl text-amber-900 font-bold"><a href="#" > 🥥 CoconutStore </a></li>
        </ul>

        <ul className="basis-1/3 flex justify-center gap-8 items-center text-sm">
          <li><a href="#"> Início</a></li>
          <li><a href="#"> Produtos</a></li>
          <li><a href="#"> Sobre</a></li>
          <li><a href="#"> Contato</a></li>
        </ul>


        <ul className="basis-1/3 flex justify-end items-center gap-8">
          {/* <li><Button variant="outline" size="sm" > */}
            {/* <ShoppingCart/> */}
            {/* Carrinho */}
          {/* </Button></li> */}
          <li>
            <Logar/>
          </li>
        </ul>
      </nav>
    </div>
  )
}
