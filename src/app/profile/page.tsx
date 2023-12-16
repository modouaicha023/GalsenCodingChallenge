"use client";
import { redirect } from "next/navigation";
import Container from "@/components/ui/container";
import UserCard from "@/components/UserCard";
import { useSession } from "next-auth/react";
import { User } from "@/lib/types";


export default function Profile() {
  const { data: session }: any = useSession();
  if (!session) {
    redirect("/sign-in");
  }
  return (
    <Container>
      <div className="flex  md:justify-start min-h-screen">
        <UserCard {...(session.user as User)} />
      </div>
    </Container>
  );
}