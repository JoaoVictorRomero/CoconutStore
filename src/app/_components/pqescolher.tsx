
// ======================================= 
//     Componente "Por que Escolher"
// =======================================


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
                    imagem={"/imagem_componente_pqescolher1.png"} />
            </div>

        </div>
    );
}
