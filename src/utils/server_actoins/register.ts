"use server";
import { cookies } from "next/headers";

export const registerUser = async (
  name: string,
  email: string,
  password: string,
) => {
  try {
    const resultFetch = await fetch(`${process.env.BE_URL}/auth/signUp`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ name: name, email: email, password: password }),
    });
    const headers = resultFetch.headers;
    console.log(resultFetch);
    const token = headers.get("Authorization");
    if (token) {
      const cookieList = await cookies();
      cookieList.set("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      });
      return "success";
    } else {
      return "failure";
    }
  } catch (e) {
    console.error(e);
  }
};
