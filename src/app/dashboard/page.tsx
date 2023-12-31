"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
export default function Dashbord() {
  const { data: session }: any = useSession();
  if (!session) {
    redirect("/sign-in");
  }
  return <div className="min-h-screen"> {session.user?.name} Dashboard</div>;
}
