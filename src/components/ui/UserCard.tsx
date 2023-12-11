"use client";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import User from "@/models/User";
interface User {
  name: string;
  email: string;
  image: string;
  githubUsername: string;
  linkedinUsername: string;
  twitterUsername: string;
}

const UserCard = (user: User) => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={`bg-${
        theme === "light"
          ? "white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
          : "282828"
      } w-fit  p-4 rounded-md m-6 flex flex-col gap-8`}>
      <div className="flex gap-4">
        <img
          src={user?.image}
          alt={user?.name}
          width={100}
          height={100}
          className=" h-20 w-20 rounded-full"
        />
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-lg">{user?.name}</h1>
          <h3>{user?.email}</h3>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className=" flex gap-2">
          <Github />
          <Link href={`https://github.com/${user?.githubUsername}`}>
            <span>{`@${user?.githubUsername}`} </span>
          </Link>
        </div>

        <div className=" flex gap-2">
          <Linkedin />
          <Link href={`https://www.linkedin.com/in/${user?.linkedinUsername}`}>
            <span>{`@${user?.linkedinUsername}`}</span>
          </Link>
        </div>

        <div className="flex gap-2">
          <Twitter />
          <Link href={`https://twitter.com/${user?.twitterUsername}`}>
            <span>{`@${user?.twitterUsername}`}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
