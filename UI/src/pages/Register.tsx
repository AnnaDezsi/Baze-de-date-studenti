"use client"


import { RegisterForm } from "@/components/custom";

export const Register = () => {
  return (
    <div className="">
      <h1 className="text-center text-3xl font-semibold mb-10	">Register</h1>
      <div className="w-full flex justify-center ">
        <div className="w-full max-w-lg border rounded p-5">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};
