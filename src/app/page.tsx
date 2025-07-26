import Link from 'next/link';
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";
import { Pre_footer } from "./_components/pre_footer";
import { Intro_pag_sobre } from "./_components/intro_pag_sobre";
import { BannerInformativo } from "./_components/bannerInformativo";
import { Conheca_Produtos } from './_components/conheca_produtos';

export default function HomePage() {
  return(
    <main>
      <BannerInformativo
          titulo = {<h1 className = "text-6xl font-semibold"> Cocos Frescos <span className="flex max-w-[300px] text-orange-700"> Direto da Fazenda</span> </h1>}

          descricao = {<p className="max-w-[600px] py-10 text-justify text-[#4B5563] text-xl"> Descubra o melhor do coco em cada detalhe! Produtos selecionados com qualidade premium, frescor garantido e entrega rápida para levar até você toda a autenticidade, versatilidade e sabor que só o coco pode oferecer.</p>}

          img ="logo_arrumada.png"

          icone="🌴"
          >
              <div className="flex gap-x-3 pb-10">
                  <button className="bg-orange-700 text-white px-6 py-3 rounded-md transition duration-150 ease-in-out hover:bg-orange-800 cursor-pointer"> <Link href="../produtos"> Compre Agora </Link> </button>
                  <button className="bg-white text-black px-6 py-3 rounded-md border border-gray-300 hover:bg-gray-100 cursor-pointer"> <Link href= "../sobre"> Saiba Mais </Link></button>
              </div>

      </BannerInformativo>

      <Conheca_Produtos/>

      <Pre_footer
      tipo = "Por que Escolher a CoconutStore?"
      />

    </main>
  )
}

