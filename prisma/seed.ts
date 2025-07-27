import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {

  const products = await prisma.product.createMany({
    data: [
      {name: 'Kit6', description: 'escreva qualquer coisal', price: 20.90},
      {name: 'Verde Tradicional', description: 'Verde ideal para águas bem geladas', price: 20.90},
      {name: 'Água de Coco Premium', description: '100% natural, direto do coco', price: 12.50},
      {name: 'Coco Ralado Fino', description: 'Perfeito para receitas e sobremesas', price: 8.90},
      {name: 'Leite de Coco Cremoso', description: 'Ideal para pratos doces e salgados', price: 9.50},
      {name: 'Óleo de Coco Extra Virgem', description: 'Prensado a frio, sabor suave', price: 24.90},
      {name: 'Farinha de Coco', description: 'Sem glúten, rica em fibras', price: 14.70},
      {name: 'Doce de Coco', description: 'Coco ralado adoçado naturalmente', price: 7.80},
      {name: 'Chips de Coco', description: 'Crocrância perfeita para o lanche', price: 10.20},
      {name: 'Coco em Cubos', description: 'Pedaços macios, perfeitos para sobremesas', price: 11.60},
      {name: 'Bebida de Coco com Chocolate', description: 'Combinação irresistível', price: 13.40},
      {name: 'Coco Verde In Natura', description: 'Para beber direto no canudinho', price: 5.90}
    ],
    // skipDuplicates: true,
  })


  console.log({products})

}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })


  