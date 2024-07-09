"use client";
import { auth, handleLogin } from "@/action/ServerAction";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";

function Login({ mode }) {
  const [formState, formAction] = useFormState(auth.bind({}, mode), {});
  //   const { data, errors } = formState;
  //   useEffect(() => {
  //     if (data && !errors) {
  //       console.log("data", data);
  //       const users = JSON.parse(localStorage.getItem("users")) || {};
  //       console.log("users", users);
  //       users[data.email] = data.password;
  //       localStorage.setItem("users", JSON.stringify(users));
  //       redirect("/dashboard");
  //     }
  //   }, [data, errors]);
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form action={formAction} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />

            {formState?.errors?.email && (
              <p className="mt-2 text-sm text-red-600">
                {formState.errors.email}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {formState?.errors?.password && (
              <p className="mt-2 text-sm text-red-600">
                {formState.errors.password}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {mode === "login" ? "Login" : "Create Account"}
          </button>
          <div>
            {mode === "login" && (
              <Link href="/?mode=signup">Create an account.</Link>
            )}
            {mode === "signup" && (
              <Link href="/?mode=login">Login with existing account.</Link>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
