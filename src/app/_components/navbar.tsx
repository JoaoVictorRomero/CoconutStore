

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


        <ul className="basis-1/3 flex justify-end items-center">
          <li><a href="#"> 🛒 Carrinho</a></li>
        </ul>
      </nav>
    </div>
  )
}
