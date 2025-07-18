
type prop_pre_footer = {
    tipo:string,

    texto?:string,
    desc?:string,
    sub_desc?:string,
    imagem?:string,
    layout?:string[],

}

// Função responsável por retornar o conteúdo e o layout específicos de cada tipo de pre-footer 
// - "Por que Escolher a CoconutStore?", "Entre em Contato" ou "Nossa Equipe" -
function obtendo_dados(tipo:string){

    let titulo_subtitulo_principal:string[];
    let texto_bloco_card_informacao:string[][];
    let imagem_exibicao:string[];

    let layout_blocos_1e2:string[][];
    let layout_bloco_card_informacoes:string[];

    
    if (tipo == "Por que Escolher a CoconutStore?"){

        titulo_subtitulo_principal = [
            "Por que Escolher a CoconutStore?", 
            "Compromisso com a qualidade e satisfação do cliente"
        ];

        texto_bloco_card_informacao = [
            ["100% Natural","Cocos cultivados sem agrotóxicos, direto da fazenda para sua mesa"],
            ["Qualidade Garantida","Rigoroso controle de qualidade em todas as etapas do processo"],
            ["Entrega Rápida","Entregamos em até 24h para manter o frescor do produto",]
        ];
        imagem_exibicao = [
            "/imagens_pre_footer/imagem_componente_pqescolher1.png",
            "/imagens_pre_footer/imagem_componente_pqescolher2.png",
            "/imagens_pre_footer/imagem_componente_pqescolher3.png"
        ];

        layout_blocos_1e2 = [
            ["max-w-[1280px] h-[460px] m-auto bg-[linear-gradient(14deg,_#F0FDF4,_#FFFBEB)]"],["flex justify-center space-x-30 px-20"]
        ];

        layout_bloco_card_informacoes = ["w-[384px]"]
    }

    else if (tipo == "Entre em Contato"){

        titulo_subtitulo_principal = [
            "Entre em Contato",
            "Estamos sempre prontos para atender você"
        ];

        texto_bloco_card_informacao = [
            ["Telefone","(11) 9999-9999", "Segunda a Sexta, 8h às 18h" ],
            ["E-mail","contato@coconutstore.com", "Respondemos em até 24h"],
            ["Localização","Brasilia, DF", "Fazenda principal"]
        ];

        imagem_exibicao = [
            "/imagens_pre_footer/phone.png",
            "/imagens_pre_footer/mail.png", 
            "/imagens_pre_footer/map-pin.png"
        ];
            
        layout_blocos_1e2 = [
            ["max-w-[1280px] h-[460px] m-auto bg-[linear-gradient(14deg,_#F7F9F1,_#FFFBEB)]"],["flex justify-center space-x-15 px-15"]
        ];

        layout_bloco_card_informacoes = ["w-[600px] bg-white p-4 shadow-lg/10 border border-gray-200 rounded-lg"]

    }

    else if ( tipo == "Nossa Equipe"){

        titulo_subtitulo_principal = [
            "Nossa Equipe",
            "Conheça as pessoas dedicadas que fazem a CoconutStore ser especial"
        ];

        texto_bloco_card_informacao = [
            ["Joao Romero","Desenvolvedor" ],
            ["Bernardo L.C.Boiteux","Desenvolvedor"],
            ["Nikolas Pessoa ","Gerente de Projeto"],
            ["Gabriel Balder","Product Owner"]
        ];

        imagem_exibicao = [
            "/imagens_pre_footer/circle-user-round.png",
            "/imagens_pre_footer/circle-user-round.png", 
            "/imagens_pre_footer/circle-user-round.png",
            "/imagens_pre_footer/circle-user-round.png"
        ];
            
        layout_blocos_1e2 = [
            ["max-w-[1280px] h-[460px] m-auto bg-white"],["flex justify-center space-x-15 px-15"]
        ];

        layout_bloco_card_informacoes = ["w-[600px] bg-white p-4 shadow-lg/10 border border-gray-200 rounded-lg"]
    }
    else{
        console.log("Durante a utilização do componente PRE_FOOTER, não foi definido qual tipo deve ser usado. Lembre-se de que só existem os seguintes tipos disponíveis: Por que Escolher a CoconutStore?, Entre em Contato ou Nossa Equipe. Para isso, no momento de utilizar o componente, atribua à prop texto o tipo de pre-footer desejado (um dos três citados acima).")
    }

    return {titulo_subtitulo_principal, texto_bloco_card_informacao, imagem_exibicao, layout_blocos_1e2, layout_bloco_card_informacoes};
}


// Função responsável por exibir as subdivisões de cards de informação.
function Card_Informacao({texto, desc, sub_desc, imagem, layout}:prop_pre_footer) {
    return(

        <div className={layout[0]}>

            <div className=" transition-transform duration-300 ease-in-out hover:scale-115 bg-white rounded-full w-[50px] h-[50px] m-auto shadow-lg/30">
                <img className="m-auto p-3" src={imagem} alt="" />
            </div>
            <h3 className="text-center font-bold p-4">{texto}</h3>
            <p className="text-center text-[#4B5563] text-[13px] ">{desc}</p>

            <>
                {sub_desc != null && <p className="text-center text-[#4B5563] text-[13px] ">{sub_desc}</p> }
            </>
            
        </div>
    )
}


export function Pre_footer({tipo}:prop_pre_footer){

    const {titulo_subtitulo_principal, texto_bloco_card_informacao,imagem_exibicao, layout_blocos_1e2, layout_bloco_card_informacoes} = obtendo_dados(tipo);

    return(

        // Bloco 1 --> div pai, div que engloba tudo
        <div className={layout_blocos_1e2[0]}>

            {/*Bloco 2 --> div que apresenta o Titulo e Subtítulo */}
            <div className=" w-[600px] m-auto pt-15 pb-15">
                <h1 className="text-center text-[35px] font-semibold">{titulo_subtitulo_principal[0]}</h1>
                <p className="text-center text-[#4B5563] p-3 text-[18.5px]">{titulo_subtitulo_principal[1]}</p>

            </div>

            {/* Bloco 3 --> Bloco div pai que contem as subdivs de card de informacao */}
            <div className={layout_blocos_1e2[1]}>

                <Card_Informacao 
                    texto = {texto_bloco_card_informacao[0][0]}
                    desc = {texto_bloco_card_informacao[0][1]}
                    sub_desc = {texto_bloco_card_informacao[0][2]}
                    imagem = {imagem_exibicao[0]}
                    layout = {layout_bloco_card_informacoes}
                    
                />

                <Card_Informacao 
                    texto= {texto_bloco_card_informacao[1][0]}
                    desc= {texto_bloco_card_informacao[1][1]}
                    sub_desc = {texto_bloco_card_informacao[1][2]}
                    imagem = {imagem_exibicao[1]}
                    layout = {layout_bloco_card_informacoes}
                />

                <Card_Informacao 
                    texto= {texto_bloco_card_informacao[2][0]}
                    desc= {texto_bloco_card_informacao[2][1]}
                    sub_desc = {texto_bloco_card_informacao[2][2]}
                    imagem = {imagem_exibicao[2]}
                    layout = {layout_bloco_card_informacoes}
                />

                <>
                    {texto_bloco_card_informacao[3] != null && 
                    <Card_Informacao 
                        texto= {texto_bloco_card_informacao[3][0]} 
                        desc= {texto_bloco_card_informacao[3][1]} 
                        sub_desc = {texto_bloco_card_informacao[3][2]} 
                        imagem = {imagem_exibicao[3]} 
                        layout = {layout_bloco_card_informacoes}
                    /> 
                    }
                </>


            </div>

        </div>
    );
}
