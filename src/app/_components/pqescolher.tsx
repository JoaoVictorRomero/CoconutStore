
// ======================================= 
//     Componente "Por que Escolher"
// =======================================

/*
        tituloPrincipal = "Entre em Contato";
        subtituloPrincipal = "Estamos sempre prontos para atender você";

        imagemDiv1 = "/imagem_componente_pqescolher1.png";
        tituloDiv1 = " Telefone";
        subtituloDiv1 = "(11) 9999-9999";
        sub_subtituloDiv1 = "Segunda a Sexta, 8h às 18h";

        imagemDiv2 = "imagem_componente_pqescolher2.png";
        tituloDiv2 = "E-mail";
        subtituloDiv2 = "contato@coconutstore.com";
        sub_subtituloDiv2 = "Respondemos em até 24h";

        imagemDiv3 = "imagem_componente_pqescolher3.png";
        tituloDiv3 = "Localização";
        subtituloDiv3 = "São Paulo, SP";
        sub_subtituloDiv3 = "Fazenda principal";

         efeitos_da_div_principal = "max-w-[1280px] h-[460px] bg-[linear-gradient(135deg,_#fffbe8,_#FFFBEB)]";
         efeitos_da_div_segundaria= "flex justify-center space-x-8 px-10";
         efeitos_das_sub_divs= "w-[600px] bg-white p-4  rounded-md shadow-lg/10 ";

*/


function BlocoBranco({texto, desc, imagem}) {
    return(

        <div className="w-[384px]">
            <div className=" transition-transform duration-300 ease-in-out hover:scale-115 bg-white rounded-full w-[50px] h-[50px] m-auto shadow-lg/30">
                <img className="m-auto p-3" src={imagem} alt="" />
            </div>
            <h3 className="text-center font-bold p-4">{texto}</h3>
            <p className="text-center text-[#4B5563] text-[13px] ">{desc} </p>
        </div>
    )
}

export function Pqescolher(){
    return(  
        <div className="max-w-[1280px] h-[460px] bg-[linear-gradient(14deg,_#F0FDF4,_#FFFBEB)]">

            {/* Bloco do Titulo e Subtítulo */}
            <div className=" w-[600px] m-auto pt-15 pb-15">
                <h1 className="text-center text-[35px] font-semibold">Por que Escolher a CoconutStore?</h1>
                <p className="text-center text-[#4B5563] p-3 text-[18.5px]">Compromisso com a qualidade e satisfação do cliente</p>
            </div>

            <div className="flex justify-center space-x-30 px-20">
                <BlocoBranco 
                    texto={"100% Natural"} 
                    desc={" Cocos cultivados sem agrotóxicos, direto da fazenda para sua mesa "} 
                    imagem={"/imagem_componente_pqescolher1.png"} 
                />

                <BlocoBranco
                    texto
                
                />
            </div>

        </div>
    );
}
