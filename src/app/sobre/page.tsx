import Link from 'next/link';

import { Footer } from "../_components/footer";
import { Generico_card_sobre } from "../_components/generico_card_sobre";
import { Intro_pag_sobre } from "../_components/intro_pag_sobre";
import { BannerInformativo } from "../_components/bannerInformativo";
import { Pre_footer } from "../_components/pre_footer";
import { Navbar } from '../_components/navbar';

export default function Page(){
    return(
        <div>
            <Intro_pag_sobre/>

            <Generico_card_sobre/>

            <BannerInformativo

                titulo = {<h1 className = "text-3xl font-semibold"> Nossa História </h1>}

                descricao = {<p className="w-[100%] py-3 text-justify text-[#4B5563]">
                A CoconutStore surgiu em 2025 a partir de um projeto trainee desenvolvido para o processo seletivo da empresa júnior Struct, vinculada à Universidade de Brasília (UnB). <br /><br />

                Com isso, o presente projeto foi elaborado com o objetivo de capacitar os integrantes nas tecnologias mais utilizadas no desenvolvimento web moderno, como React, TypeScript, Tailwind CSS, Next.js, entre outras. <br /><br />

                Além de aprimorar habilidades técnicas, o projeto também visa promover a experiência prática em trabalho colaborativo, boas práticas de versionamento de código com Git/GitHub, e a aplicação de conceitos de design responsivo e acessibilidade, preparando os membros para os desafios do mercado de tecnologia.</p>}

                img ="logo_arrumada.png" 
                icone = "🥥" 
                
                >
                    <div className="flex flex-col lg:flex-row py-8 font-bold text-sm ">
                        <h5 className="p-2 m-auto md:m-0">Sustentável</h5>
                        <h5 className="p-2 m-auto md:m-0">100% Natural</h5>
                        <h5 className="p-2 m-auto md:m-0">Família</h5>
                    </div>
                
            </BannerInformativo>

            <Pre_footer
            tipo = "Nossa Equipe"/>

            <Pre_footer
            tipo = "Entre em Contato"/>
        

        </div>
    );
}
