"use client";

import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "@/assets/logo.png";

type TLoginData = {
  name: string;
  email: string;
  password: string;
};

const RegisterPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: TLoginData) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-primary/30 border-2 p-8 shadow-md w-full max-w-[400px] rounded-lg">
        <div className="mb-2">
          <Image
            src={logo}
            height={50}
            width={50}
            alt="logo"
            className="mx-auto mb-2"
          />
          <h1 className="text-2xl font-semibold text-center mb-2">
            Create account{" "}
          </h1>
          <p className=" text-sm text-gray-500 text-center">
            Please enter your details to create an account.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 "
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-slate-500">
              Full name
            </label>
            <input placeholder="Enter your name" {...register("name")} />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-slate-500">
              Email
            </label>
            <input
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-slate-500">
              Password
            </label>
            <input
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}

            <span
              className={cn(
                "cursor-pointer relative md:eft-[300px] left-72 ",
                errors.password ? "bottom-14" : "bottom-9"
              )}
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? <Eye size={22} /> : <EyeOff size={22} />}
            </span>
          </div>

          <button
            type="submit"
            className="bg-primary text-white py-2 rounded-md"
          >
            Sign up
          </button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/login" className="text-primary">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
