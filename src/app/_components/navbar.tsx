import { Button } from "src/components/ui/button"
import Logar from "./auth"
import Link from 'next/link';


function ShoppingCart() {
  return(
    <>
      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
    </>
  )
}

export function Navbar() {
  return(
    <div className="bg-white border  border-gray-300 shadow-xl font-sans py-5">
      <nav className="flex max-w-[1280px] m-auto">

        <section className="flex flex-col md:flex-row w-full">

          <ul className="basis-1/3 flex justify-center md:justify-start items-center">
            <li className="text-3xl text-amber-900 font-bold"><Link href="/">🥥 CoconutStore</Link></li>
          </ul>

          <ul className="basis-1/3 flex justify-center gap-8 items-center text-md py-3">
            <li> <Link href="/">Início</Link> </li>
            <li> <Link href="../produtos">Produtos</Link> </li>
            <li> <Link href="../sobre">Sobre</Link> </li>
          </ul>


          <ul className="basis-1/3 flex  justify-center md:justify-end items-center gap-8 ">
            {/* <li><Button variant="outline" size="sm" > */}
              {/* <ShoppingCart/> */}
              {/* Carrinho */}
            {/* </Button></li> */}
            <li>
              <Logar/>
            </li>
          </ul>
        </section>

      </nav>
    </div>

  )
}
