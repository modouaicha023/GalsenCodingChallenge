"use client";
import { redirect } from "next/navigation";
import Container from "@/components/ui/container";
import UserCard from "@/components/ui/UserCard";
import { useSession } from "next-auth/react";
export default function Profile() {
  const { data: session }: any = useSession();
  if (!session) {
    redirect("/sign-in");
  }
  return (
    <Container>
      <div>
        <UserCard />
      </div>
    </Container>
  );
}
