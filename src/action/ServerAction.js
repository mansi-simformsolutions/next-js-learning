"use server";

import { createAuthSession, destroySession } from "@/lib/auth";
import { createUser } from "@/lib/userService";
import { redirect } from "next/navigation";

export const handleLogin = (prevState, formData) => {
  // console.log("formData", formData);
  const email = formData.get("email");
  const password = formData.get("password");

  console.log("email", email);
  console.log("password", password);

  let errors = {};

  if (!email.includes("@")) {
    errors.email = "Please enter a valid email address.";
  }

  if (password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    console.log("entereredd");
    console.log("errors", errors);
    return {
      errors,
    };
  }
  //   return { data: { email, password } };
  //   //   else {
  //   //     const users = JSON.parse(localStorage.getItem("users")) || {};

  //   //     redirect("/dashboard");
  //   //   }
  try {
    const id = createUser(email, password);
    createAuthSession(id);
    redirect("/dashboard");
  } catch (error) {
    if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return {
        errors: {
          email:
            "It seems like an account for the chosen email already exists.",
        },
      };
    }
    throw error;
  }
};

export async function auth(mode, prevState, formData) {
  if (mode === "login") {
    return login(prevState, formData);
  }
  return handleLogin(prevState, formData);
}
export async function logout() {
  await destroySession();
  redirect("/");
}
