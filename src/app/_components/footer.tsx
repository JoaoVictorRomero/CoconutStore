
export function Footer(){
    return(
        <footer className= " max-w-[1280px] bg-[#111827] p-10 text-white flex flex-col">

            <div className="flex space-x-20 justify-center m-auto p-3">

                <div className="w-60">
                    <h3>🥥 CoconutStore</h3>
                    <p className="text-[#9CA3AF] text-xs">Os melhores cocos frescos, direto da fazenda para sua casa.</p>
                </div>
                
                <div className=" w-40">
                    <h3>Produtos</h3>
                    <ul className="text-[#9CA3AF] text-xs">
                        <li>Coco Verde</li>
                        <li>Coco Seco</li>
                        <li>Kits Família</li>
                    </ul>
                </div>

                <div className=" w-40">
                    <h3>Empresa</h3>
                    <ul className="text-[#9CA3AF] text-xs">
                        <li></li>
                        <li> <a href="#"> Sobre Nós </a></li>
                        <li> <a href="#"> Nossa Fazenda </a></li>
                        <li> <a href="#"> Contato </a></li>
                    </ul>
                </div>

                <div className=" w-40">
                    <h3>Contato</h3>
                    <ul className="text-[#9CA3AF] text-xs">
                        <li> 📞 (**) 9999-9999 </li>
                        <li> 📧 email.@ </li>
                        <li> 📍 Brasilia, Df </li>
                    </ul>
                </div>

            </div>

            <hr className="text-[#9CA3AF]"/>

            <div className="flex justify-center mt-6 text-[#9CA3AF] text-xs">
                <hr />
                <p>© 2024 CoconutStore. Todos os direitos reservados.</p>
            </div>

        </footer>

    );
} 