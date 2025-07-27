import type { ReactNode } from "react";

export function Carrinho_Compra({children}:ReactNode){
    return(
        <section className="max-w-[1280px] mr-auto ml-auto mb-10 mt-4  p-10">
            <header>
                <h1 className="text-4xl font-bold pb-8">Carrinho de Compras</h1>
            </header>

            <section className="border shadow-xl rounded-md p-5">
                <header>
                    <h1 className="text-2xl font-bold"> Seus Produtos: </h1>
                </header>

                <section>
                    {children}
                </section>
            </section>

        </section>
    );
}