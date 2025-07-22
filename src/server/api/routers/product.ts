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
});
