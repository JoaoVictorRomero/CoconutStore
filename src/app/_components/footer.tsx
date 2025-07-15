import { email } from "zod/v4";

    type Props = {
        telefone:string;
        email:string;
        local: string;
    }

export function Footer(props:Props){
    
    return(
        <footer className= " max-w-[1280px] h-[300px] bg-[#111827] text-white">

            <div className="flex space-x-10 justify-center m-auto py-10">

                
                {/* BLOCO DO COCONUTSTORE */}
                <div className="w-60">
                    <h3>🥥 CoconutStore</h3>
                    <p className="text-[#9CA3AF] text-xs py-3.5">Os melhores cocos frescos, direto da fazenda para sua casa.</p>
                </div>
            
                {/* BLOCO DOS PRODUTOS */}
                <div className=" w-40">
                    <h3>Produtos</h3>
                    <ul className="text-[#9CA3AF] text-xs py-2">
                        <li className="py-1.5 hover:text-white"> Coco Verde </li>
                        <li className="py-1.5 hover:text-white"> Coco Seco </li>
                        <li className="py-1.5 hover:text-white"> Kits Família </li>
                    </ul>
                </div>

                {/* BLOCO DA EMPRESA */}
                <div className=" w-40">
                    <h3>Empresa</h3>
                    <ul className="text-[#9CA3AF] text-xs py-2">
                        <li className="py-1.5 hover:text-white"> <a href="#"> Sobre Nós </a></li>
                        <li className="py-1.5 hover:text-white"> <a href="#"> Nossa Fazenda </a></li>
                        <li className="py-1.5 hover:text-white"> <a href="#"> Contato </a></li>
                    </ul>
                </div>

                
                {/* BLOCO DOS CONTATOS */}
                <div className=" w-">
                    <h3>Contato</h3>
                    <ul className="text-[#9CA3AF] text-xs py-2">
                        <li className="py-1.5"> 📞 {props.telefone} </li>
                        <li className="py-1.5"> 📧 {props.email} </li>
                        <li className="py-1.5"> 📍  {props.local} </li>
                    </ul>
                </div>

            </div>

            {/* BLOCO DO RODAPÉ FINAL */}

            <hr className="text-[#9CA3AF]"/>

            <div className="flex justify-center mt-6 text-[#9CA3AF] text-xs">
                <hr />
                <p>© 2024 CoconutStore. Todos os direitos reservados.</p>
            </div>

        </footer>

    );
} 