"use server";
import { cookies } from "next/headers";

export const loginUser = async (email: string, password: string) => {
  try {
    const resultFetch = await fetch(`${process.env.BE_URL}/auth/login`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email: email, password: password }),
    });
    const headers = resultFetch.headers;
    const token = headers.get("Authorization");
    if (token) {
      const cookieList = await cookies();
      cookieList.set("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      });
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.error(e);
  }
};
