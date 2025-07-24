
export function NossaHistoria(){
    return(

        <section className="bg-gradient-to-br from-[#f0fdfd] to-[#fffbeb] py-20">

            <section className="flex flex-col md:flex-row max-w-[1280px] m-auto gap-x-10 px-0">

                <section className="w-[70%] m-auto md:m-0">
                    <header className="">
                        <h1 className="text-3xl font-semibold">Nossa História</h1>
                    </header>

                    <div className="">
                        <p className="w-[100%] py-3 text-justify text-[#4B5563] ">
                            A CoconutStore surgiu em 2025 a partir de um projeto trainee desenvolvido para o processo seletivo da empresa júnior Struct, vinculada à Universidade de Brasília (UnB). <br /><br />
                            
                            Com isso, o presente projeto foi elaborado com o objetivo de capacitar os integrantes nas tecnologias mais utilizadas no desenvolvimento web moderno, como React, TypeScript, Tailwind CSS, Next.js, entre outras. <br /><br />
                            
                            Além de aprimorar habilidades técnicas, o projeto também visa promover a experiência prática em trabalho colaborativo, boas práticas de versionamento de código com Git/GitHub, e a aplicação de conceitos de design responsivo e acessibilidade, preparando os membros para os desafios do mercado de tecnologia.
                        </p>
                    </div>

                    <div>
                        <div className="flex flex-col lg:flex-row py-8 font-bold text-sm ">
                            <h5 className="p-2 m-auto md:m-0">Sustentável</h5>
                            <h5 className="p-2 m-auto md:m-0">100% Natural</h5>
                            <h5 className="p-2 m-auto md:m-0">Família</h5>
                        </div>
                    </div>
                    
                </section>

                <section className="relative flex bg-linear-[130deg,#fde68a,#bbf7d0] rounded-3xl w-[350px] h-[200px] md:w-[550px] md:h-[400px] m-auto md:m-0">

                    <figure className="flex m-auto items-center ">
                        <img className = " w-[100px] h-[100px] md:w-[300px] md:h-[300px] " src="/logo_arrumada.png" alt="" />
                    </figure>

                    <div className="flex absolute -bottom-5 -right-5 rounded-full bg-[#dcfcdc] w-[100px] h-[100px]">
                        <p className="m-auto text-4xl">🥥</p>
                    </div>
                </section>

            </section>
            
        </section>

    );
}