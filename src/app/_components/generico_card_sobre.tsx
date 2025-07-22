type prop = {
    texto:string;
    desc:string;
    img:string;
}


function Generico_card({texto, desc, img}:prop){
    return(

        <div className="m-auto bg-white w-[250px] p-8 border border-gray-200 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">

            <div className="bg-[#fef3c7] rounded-full w-[50px] h-[50px] m-auto shadow-lg/30">
                <img className = "m-auto py-3"src={img} alt="" />
            </div>

            <div className="text-center py-2">
                <h1 className="text-2xl font-semibold">{texto}</h1>
                <h3>{desc}</h3>
            </div>


        </div>
    );
}


export function Generico_card_sobre(){
    return(

        <section>
            <div className="flex max-w-[1280px] m-auto py-15">
                <Generico_card
                    texto = {"15 +"}
                    desc = {"Anos de Experiência"}
                    img = {"/imagens_pre_footer/award.png"}
                />
                <Generico_card
                    texto = {"25"}
                    desc = {"Fazendas Parceiras"}
                    img = {"/imagens_pre_footer/map-pin.png"}
                />
                <Generico_card
                    texto = {"10k+"}
                    desc = {"Clientes Satisfeitos"}
                    img = {"/imagens_pre_footer/users.png"}
                />
                <Generico_card
                    texto = {"100%"}
                    desc = {"Produtos Naturais"}
                    img = {"/imagens_pre_footer/tree-palm.png"}
                />

            </div>
        </section>

    );
}