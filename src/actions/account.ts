"use server";

import { accountType } from "@/types/account";
import { cookies } from "next/headers";

export const getAccountData = async (): Promise<accountType | null> => {
  const cookieList = await cookies();
  const token = cookieList.get("token")?.value ?? "";
  try {
    const res = await fetch(`${process.env.BE_URL}/account`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.ok) {
      return res.json();
    } else {
      return null;
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};
