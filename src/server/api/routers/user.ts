import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  me: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findUnique({
      where: {
        id: ctx.session.user.id,
      },
    });
    return user;
  }),

  showProduct: publicProcedure.query(async ({ctx}) => {
    const products = await ctx.db.product.findMany();
    return products ?? null;
  }),

  // addProduct: protectedProcedure.
});
