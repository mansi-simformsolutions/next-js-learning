import { verifyAuth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

const Dashboard = async () => {
  const result = await verifyAuth();
  if (!result.user) {
    return redirect("/");
  }
  return <div>Dashboard</div>;
};

export default Dashboard;
