"use server"

import { auth, signIn } from "~/server/auth"

export async function handleAddCart() {
  const session = await auth();
  if (!session?.user) {await signIn("discord")}
}
