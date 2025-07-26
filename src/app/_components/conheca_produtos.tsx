import Link from 'next/link';

export function Conheca_Produtos(){
    return(
        <div className="m-10">
            <section className="max-w-[1280px] m-auto">
                <section className="bg-[linear-gradient(14deg,_#F0FDF4,_#FFFBEB)] text-center py-8">
                    <header className="px-5">
                        <h1 className="py-3 font-bold text-2xl">Conheça Nossos Produtos</h1>
                        <div>
                            <h3 className="max-w-[700px] m-auto text-[#4B5563] text-base">Descubra nossa linha completa de cocos frescos, orgânicos e kits especiais. Encontre o produto perfeito para você!</h3>
                        </div>
                    </header>

                    <div className="pt-5">
                        <button className="bg-orange-700 text-white px-6 py-3 rounded-md transition duration-150 ease-in-out hover:bg-orange-800 cursor-pointer"><Link href="../produtos">Ver Todos os Produtos</Link></button>
                    </div>
                </section>
            </section>
        </div>
    );
}