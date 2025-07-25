import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const productRouter = createTRPCRouter({
  showProduct: publicProcedure.query(async ({ctx}) => {
    const products = await ctx.db.product.findMany();
    return products ?? null;
  }),

  addToCart: protectedProcedure
  .input(z.object({productId: z.number()}))
  .mutation(async ({ctx, input}) => {
    let userId = ctx.session.user.id;
    let productId = input.productId;
    return await ctx.db.cartItem.upsert({
      where: {
        userId_productId: {
          userId,
          productId,
        },
      },
      update: {
        quantity: {
          increment: 1,
        },
      },
      create: {
        userId,
        productId,
      },
    })
  })
});
