"use server"

import { auth, signIn } from "~/server/auth"
import { api } from "~/trpc/server";

export async function handleAddCart() {
  const session = await auth();
  if (!session?.user) {await signIn("discord")}
}

export async function addBoughtItem({productId, quantity}) {
  api.product.addBoughtItem({prodId: productId, itemQuantity: quantity}) 
}
