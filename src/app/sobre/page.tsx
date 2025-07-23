import { Footer } from "../_components/footer";
import { Generico_card_sobre } from "../_components/generico_card_sobre";
import { Intro_pag_sobre } from "../_components/intro_pag_sobre";
import { NossaHistoria } from "../_components/nossa_historia";
import { Pre_footer } from "../_components/pre_footer";

export default function Page(){
    return(
        <div>

            <Intro_pag_sobre/>
            
            <Generico_card_sobre/>

            <NossaHistoria/>

            <Pre_footer
            tipo = "Nossa Equipe"
            />

            <Pre_footer
            tipo = "Entre em Contato"
            />
        
        </div>
    );
}