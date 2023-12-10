"use client";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import { Button } from "./button";
import Link from "next/link";
import User from "@/models/User";
import connect from "@/utils/db";

const UserCard = async () => {
  const { data: session }: any = useSession();
  const { theme, setTheme } = useTheme();
  // const getUserData = async () => {
  //   await connect();
  //   try {
  //     const user = await User.findOne({ email: session.user?.email });
  //     if (user) {
  //       console.log(user);
  //       return user;
  //     }
  //     return null;
  //   } catch (error: any) {
  //     console.log(error);
  //     return null;
  //   }
  // };

  return (
    <div
      className={`bg-${
        theme === "light"
          ? "white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
          : "282828"
      } w-fit  p-4 rounded-md m-6 flex flex-col gap-8`}>
      <div className="flex gap-4">
        <img
          src={session.user?.image}
          alt={session.user?.name}
          width={100}
          height={100}
          className=" h-20 w-20 rounded-full"
        />
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-lg">{session.user?.name}</h1>
          <h3>{session.user?.email}</h3>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className=" flex gap-2">
          <Github />
          <Link href={`https://github.com/${session.user?.githubUsername}`}>
            <span>{`@${session.user?.githubUsername}`} </span>
          </Link>
        </div>

        <div className=" flex gap-2">
          <Linkedin />
          <Link
            href={`https://www.linkedin.com/in/${session.user?.linkedinUsername}`}>
            <span>{`@${session.user?.linkedinUsername}`}</span>
          </Link>
        </div>

        <div className="flex gap-2">
          <Twitter />
          <Link href={`https://twitter.com/${session.user?.twitterUsername}`}>
            <span>{`@${session.user?.twitterUsername}`}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
