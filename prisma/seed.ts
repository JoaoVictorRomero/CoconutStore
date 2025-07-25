import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {

  const products = await prisma.product.createMany({
    data: [
      {name: 'Kit6', description: 'escreva qualquer coisal', price: 20.90},
      {name: 'Verde Tradicional', description: 'Verde ideal para águas bem geladas', price: 20.90}
    ],
    // skipDuplicates: true,
  })

  const cart = await prisma.cartItem.create({
    data: {
      quantity: 2,
      user: { connect: { id: "cmdet27910000sbkuq55y66cp" } },
      product: { connect: { id: 8} }
    }
  });
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
