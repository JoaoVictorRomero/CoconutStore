import { CardProduto } from "../_components/cardProduto"

export default function Page() {
  return(
    <div className="max-w-[1280px] m-auto pt-6 px-4">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]  gap-4 place-content-center ">
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
      </div>
    </div>
  );
}
