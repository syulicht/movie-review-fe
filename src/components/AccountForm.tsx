"use client";
import { registerUser } from "@/utils/server_actoins/register";
import React, { useState } from "react";
import { SubmitButton } from "./SubmitButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { loginUser } from "@/utils/server_actoins/login";
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
    <>
      <h3>{props.type}</h3>
      {failureMsg !== "" && <p className="text-red-50">{failureMsg}</p>}
      <form className="bg-white" onSubmit={handleSubmit(onSubmit)}>
        {props.type === "SignUp" && (
          <div>
            <label>Name</label>
            <input type="text" {...register("name")} />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
        )}
        <div>
          <label>Email</label>
          <input type="text" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>Password</label>
          <input type="password" {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <SubmitButton title={props.type} class="" />
        </div>
      </form>
    </>
  );
};
