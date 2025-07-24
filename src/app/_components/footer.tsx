
    type props_genericoBlocoInformacao = {
        inf1:string,
        inf2:string,
        inf3:string,
        style:string,
        titulo:string,
    }


function GenericoBlocoInformacao({titulo, inf1, inf2, inf3, style}:props_genericoBlocoInformacao){
    return(
        <div className="text-lg xl:w-[300px] px-4 py-2 sm:py-0">
            <h3>{titulo}</h3>
            <ul className="text-[#9CA3AF] text-sm py-2">
                <li className={style}> <a href="#"> {inf1} </a></li>
                <li className={style}> <a href="#"> {inf2} </a></li>
                <li className={style}> <a href="#"> {inf3} </a></li>
            </ul>
        </div>
    );
}

export function Footer(){

    return(
            
            <footer className="bg-[#111827] text-white">

<<<<<<< HEAD
        <div className="bg-[#111827] text-white">
            <footer>

                <div className="flex flex-col md:flex-row max-w-[1280px] justify-center m-auto py-10">
=======
                <div className="flex flex-col sm:flex-row max-w-[1280px] m-auto py-15">
>>>>>>> NossaHistoria

                    {/* BLOCO DO COCONUTSTORE */}
                    <header className="sm:w-[400px] m-auto sm:m-4 px-4">
                        <h3 className="text-2xl font-semibold">🥥 CoconutStore</h3>
                        <h4 className="text-[#9CA3AF] text-sm py-3.5">Os melhores cocos frescos, direto da fazenda para sua casa.</h4>
                    </header>

<<<<<<< HEAD
                    <section className="flex flex-col md:flex-row space-x-30">
=======
                    <section className="
                        flex flex-col 
                        sm:flex-row 
                        sm:gap-x-8 lg:gap-x-10
                        m-auto sm:m-0
                        ">
                            
>>>>>>> NossaHistoria
                        {/* BLOCO DOS PRODUTOS */}
                        <GenericoBlocoInformacao
                            titulo={"Produtos"}
                            inf1 = {"Coco Verde"}
                            inf2 = {"Coco Seco"}
                            inf3 = {"Kits Família"}
                            style = {"py-1.5 hover:text-white"}
                        />

                        {/* BLOCO DA EMPRESA */}
                        <GenericoBlocoInformacao
                            titulo={"Empresa"}
                            inf1 = {"Sobre Nós"}
                            inf2 = {"Nossa Fazenda"}
                            inf3 = {"Contato"}
                            style = {"py-1.5 hover:text-white"}
                        />

                        {/* BLOCO DOS CONTATOS */}
                        <GenericoBlocoInformacao
                            titulo={"Contato"}
                            inf1 = {"📞 (61) 9999-9999"}
                            inf2 = {"📧 atendimento@CoconutStore.com"}
                            inf3 = {"📍 Brasilia, DF"}
                            style = {"py-1.5 hover:text-white break-all"}
                        />
                    </section>
                
                </div>

                <hr className="text-[#9CA3AF]"/>
                <div className="flex justify-center text-[#9CA3AF] text-xs py-4 pb-10">
                    <p className="">© 2024 CoconutStore. Todos os direitos reservados.</p>
                </div>

            </footer>

    );
} 