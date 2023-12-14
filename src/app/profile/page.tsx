"use client";
import { redirect } from "next/navigation";
import Container from "@/components/ui/container";
import UserCard from "@/components/ui/UserCard";
import { useSession } from "next-auth/react";


interface User {
  name: string;
  email: string;
  image: string;
  githubUsername: string;
  linkedinUsername: string;
  twitterUsername: string;
}

export default  function Profile() {
  const { data: session }: any = useSession();
  if (!session) {
    redirect("/sign-in");
  }
  return (
    <Container>
      <div>
      <UserCard {...session.user as User} />
      </div>
    </Container>
  );
}