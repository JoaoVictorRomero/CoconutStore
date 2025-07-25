import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";
import { Pre_footer } from "./_components/pre_footer";
import { Intro_pag_sobre } from "./_components/intro_pag_sobre";
import { BannerInformativo } from "./_components/BannerInformativo";

export default function HomePage() {
  return(
    <main>


      <BannerInformativo/>
      
      <Pre_footer
      tipo = "Por que Escolher a CoconutStore?"
      />

    </main>
  )
}

