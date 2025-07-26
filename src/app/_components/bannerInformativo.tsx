import type { ReactNode } from "react";

type prop = {
    titulo?:ReactNode,
    descricao?:ReactNode;
    img?:string;
    icone?:string;
    children?: ReactNode;
}

export function BannerInformativo({titulo, descricao, img, icone, children}:prop){
    return(

        <section className="bg-gradient-to-br from-[#f0fdfd] to-[#fffbeb] py-10">

            <section className="flex flex-col md:flex-row max-w-[1280px] m-auto gap-x-10 px-0 md:px-10">

                <section className="w-[70%] m-auto md:m-0">
                    <header className="">
                        {titulo}
                        {descricao}
                    </header>

                    <div>
                        {children}
                    </div>
                    
                </section>

                <section className="relative flex bg-linear-[130deg,#fde68a,#bbf7d0] rounded-3xl w-[350px] h-[200px] md:w-[550px] md:h-[400px] m-auto md:m-0">

                    <figure className="flex m-auto items-center ">
                        <img className = " w-[100px] h-[100px] md:w-[300px] md:h-[300px]" src={img} alt="" />
                    </figure>

                    <div className="flex absolute -bottom-5 -right-5 rounded-full bg-[#dcfcdc] w-[100px] h-[100px]">
                        <p className="m-auto text-4xl">{icone}</p>
                    </div>
                </section>

            </section>
            
        </section>

    );
}