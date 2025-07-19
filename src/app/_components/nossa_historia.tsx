
export function NossaHistoria(){
    return(

        <section className="bg-gradient-to-br from-[#f0fdfd] to-[#fffbeb] py-20">

            <div className="flex max-w-[1280px] m-auto space-x-10">

                <header className=" w-[600px] m-auto p-4 px-5">

                    <h1 className="text-3xl font-semibold">Nossa História</h1>
                    <p className="py-3 text-justify text-[#4B5563]">
                        A CoconutStore surgiu em 2025 a partir de um projeto trainee desenvolvido para o processo seletivo da empresa júnior Struct, vinculada à Universidade de Brasília (UnB). <br /><br />
                        
                        Com isso, o presente projeto foi elaborado com o objetivo de capacitar os integrantes nas tecnologias mais utilizadas no desenvolvimento web moderno, como React, TypeScript, Tailwind CSS, Next.js, entre outras. <br /><br />
                        
                        Além de aprimorar habilidades técnicas, o projeto também visa promover a experiência prática em trabalho colaborativo, boas práticas de versionamento de código com Git/GitHub, e a aplicação de conceitos de design responsivo e acessibilidade, preparando os membros para os desafios do mercado de tecnologia.
                    </p>

                    <div className="flex space-x-10 py-8 font-bold">
                        <h5 className="bg-white rounded-3xl p-2">Sustentável</h5>
                        <h5 className="bg-white rounded-3xl p-2">100% Natural</h5>
                        <h5 className="bg-white rounded-3xl p-2">Família</h5>
                    </div>
                </header>

                <div className="relative flex m-auto bg-linear-[130deg,#fde68a,#bbf7d0] w-[550px] h-[400px] rounded-3xl ">

                   <img className = "w-[400px] h-[400px] m-auto pt-10" src="/logo.png" alt="" />

                   <div className="flex absolute -bottom-5 -right-5 rounded-full bg-[#dcfcdc] w-[100px] h-[100px]">

                        <p className="m-auto text-4xl">🥥</p>
                   </div>
                </div>
            
            </div>
        </section>

    );
}