"use server";

import { cookies } from "next/headers";

export const logout = async () => {
  const cookie = await cookies();
  cookie.delete("token");
};