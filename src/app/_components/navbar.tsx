

export function Navbar() {
  return(
    <nav className="flex flex-row h-12 bg-orange-50 font-sans">
      <ul className="basis-1/3 flex justify-center items-center">
        <li className="text-xl font-bold"><a href="#" > CoconutStore </a></li>
      </ul>

      <ul className="basis-1/3 flex justify-center gap-8 items-center text-sm">
        <li><a href="#"> Início</a></li>
        <li><a href="#"> Produtos</a></li>
        <li><a href="#"> Sobre</a></li>
        <li><a href="#"> Contato</a></li>
      </ul>


      <ul className="basis-1/3 flex justify-center items-center">
        <li><a href="#"> Carrinho</a></li>
      </ul>
    </nav>
  )
}
