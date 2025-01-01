"use client";

import { registerUser } from "@/actions/register";
import React, { useState } from "react";
import { Button } from "./Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { loginUser } from "@/actions/login";
import { useRouter } from "next/navigation";

type Props = { type: "SignUp" | "SignIn" };

type RegisterFormData = z.infer<typeof registerSchema>;
const registerSchema = z.object({
  name: z
    .string()
    .min(1, "ユーザーネームを入力してください")
    .max(50, "ユーザーネームは50文字以内でよろ"),
  email: z.string().email("無効なEmailです"),
  password: z
    .string()
    .min(6, "パスワードは6文字以上です")
    .max(50, "パスワードは50文字以内でよろ"),
});

const loginSchema = z.object({
  email: z.string().email("無効なEmailです"),
  password: z
    .string()
    .min(6, "パスワードは6文字以上です")
    .max(50, "パスワードは50文字以内でよろ"),
});

export const AccountForm = (props: Props) => {
  const schema = props.type === "SignUp" ? registerSchema : loginSchema;
  const [failureMsg, setFailureMsg] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: RegisterFormData) => {
    if (props.type === "SignUp") {
      try {
        await registerUser(data.name, data.email, data.password);
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const result = await loginUser(data.email, data.password);
        if (result) {
          router.push("/");
        } else {
          setFailureMsg("ログインに失敗しました");
        }
      } catch (e) {
        console.log(e);
      }
    }
    reset();
  };
  return (
    <div className="w-full flex flex-cols justify-center">
      <form
        className="text-white w-1/2 border-white flex flex-col items-center py-20 rounded-2xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="text-5xl mb-12">{props.type}</h3>
        {failureMsg !== "" && <p className="text-red-50">{failureMsg}</p>}
        {props.type === "SignUp" && (
          <div className="flex flex-col w-2/3 h-20 mb-12">
            <label className="text-3xl">Name</label>
            <input
              type="text"
              {...register("name")}
              className="text-black h-16 rounded-xl p-4"
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
        )}
        <div className="flex flex-col w-2/3 h-20 mb-12">
          <label className="text-3xl">Email</label>
          <input
            type="text"
            {...register("email")}
            className="text-black h-16 rounded-xl p-4"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="flex flex-col w-2/3 h-20 mb-12">
          <label className="text-3xl">Password</label>
          <input
            type="password"
            {...register("password")}
            className="text-black h-16 rounded-xl p-4"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <Button isTypeSubmit>{props.type}</Button>
        </div>
      </form>
    </div>
  );
};
