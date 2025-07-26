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
  }),

  showCartItems: protectedProcedure
  .query(async ({ctx}) => {
    return await ctx.db.cartItem.findMany() ?? null;
  }),

  getProduct: publicProcedure
  .input(z.object({prodId: z.number()}))
  .query(async ({ctx, input}) => {
    return await ctx.db.product.findUnique({
      where: {
        id: input.prodId,
      }
    })
  }),

  deleteCartItem: protectedProcedure
  .input(z.object({prodId: z.number()}))
  .mutation(async ({ctx, input}) => {
    let userId = ctx.session.user.id;
    let productId = input.prodId;
    return await ctx.db.cartItem.delete({
      where: {
        userId_productId: {
          userId,
          productId,
        },
      },
    })
  }),
});
