"use server";

import { accountType } from "@/types/account";
import { cookies } from "next/headers";

export const getAccountData = async (): Promise<accountType> => {
  const cookieList = await cookies();
  const token = cookieList.get("token")?.value ?? "";
  const res = await fetch(`${process.env.BE_URL}/account`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};
