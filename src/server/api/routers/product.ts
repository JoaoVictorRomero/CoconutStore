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

  remoteToCart: protectedProcedure
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
          decrement: 1,
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

  deleteAllCartItem: protectedProcedure
  .mutation(async ({ctx}) => {
    return ctx.db.cartItem.deleteMany({
      where: {
        userId: ctx.session.user.id
      }
    })
  }),

  addBoughtItem: protectedProcedure
  .input(z.object({itemQuantity: z.number().nonnegative(), prodId: z.number()}))
  .mutation(async ({input, ctx}) => {
    return ctx.db.product.update({
      where: {
        id: input.prodId,
      },
      data: {
        bought: {
          increment: input.itemQuantity,
        }
      },
    })
  })
});
