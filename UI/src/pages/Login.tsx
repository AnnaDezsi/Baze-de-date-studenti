"use client"

import { LoginForm } from "@/components/custom";

export const Login = () => {
  return (
    <div className="">
      <h1 className="text-center text-3xl font-semibold mb-10	">Login</h1>
      <div className="w-full flex justify-center ">
        <div className="w-full max-w-lg border rounded p-5">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
