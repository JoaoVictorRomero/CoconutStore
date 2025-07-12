
// ======================================= 
//     Componente "Por que Escolher"
// =======================================

export function Pqescolher(){


    return(  

        <div className="max-w-[1280px] h-[460px] bg-[linear-gradient(14deg,_#F0FDF4,_#FFFBEB)]">
            
        {/* Bloco do Titulo e Subtítulo */}
            <div className=" w-[600px] m-auto pt-15 pb-15">
                <h1 className="text-center text-[35px] font-semibold">Por que Escolher a CoconutStore?</h1>
                <p className="text-center text-[#4B5563] p-3 text-[18.5px]">Compromisso com a qualidade e satisfação do cliente</p>
            </div>
        
        
            <div className="flex justify-center space-x-30 px-20">
                
            {/* Bloco do 100% Natural*/}
                <div className="w-[384px]">
                    
                    <div className="transition-transform duration-300 ease-in-out hover:scale-115 bg-white rounded-full w-[50px] h-[50px] m-auto shadow-lg/30">
                         <img className = "m-auto p-3"src="/imagem_componente_pqescolher1.png" alt="imagem de uma folha" />
                    </div>
                   
                    <h3 className="text-center font-bold p-4"> 100% Natural </h3>
                    <p className= "text-center text-[#4B5563] text-[13px]"> Cocos cultivados sem agrotóxicos, direto da fazenda para sua mesa </p>
                    
                </div>

            {/* Bloco da Qualidade Garantida*/}
                <div className="w-[384px]">

                    <div className=" transition-transform duration-300 ease-in-out hover:scale-115 bg-white rounded-full w-[50px] h-[50px] m-auto shadow-lg/30">
                         <img className="m-auto p-3" src="imagem_componente_pqescolher2.png" alt="" />
                    </div>

                    
                    <h3 className="text-center font-bold p-4"> Qualidade Garantida </h3>
                    <p className="text-center text-[#4B5563] text-[13px] "> Rigoroso controle de qualidade em todas as etapas do processo </p>

                </div>
            
            {/* Bloco da Entrega Rápida*/}
                <div className="w-[384px]">
                    
                    <div className="transition-transform duration-300 ease-in-out hover:scale-115 bg-white rounded-full w-[50px] h-[50px] m-auto shadow-lg/30">
                         <img className="m-auto p-3" src="imagem_componente_pqescolher3.png" alt="" />
                    </div>

                    
                    <h3 className="text-center font-bold p-4"> Entrega Rápida </h3>
                    <p className="text-center text-[#4B5563] text-[13px]"> Entregamos em até 24h para manter o frescor do produto </p>
                
                </div>

            </div>


        
        </div>
    );
}