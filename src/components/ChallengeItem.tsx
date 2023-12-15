"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Challenge } from "@/lib/types";
import { Button } from "./ui/button";

const ChallengeItem = (challenge: Challenge) => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={`bg-${
        theme === "light"
          ? "white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
          : "282828"
      } mobile:w-full  max-w-[250px] max-h-400px sm:w-[300px]  p-4 rounded-md m-6 flex flex-col gap-4 items-center  justify-center flex-shrink-0 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4`}>
      <Link
        href={`/challenges/${challenge.id}`}
        className="hover:opacity-95 flex gap-4 flex-col items-center justify-center">
        <img
          src={challenge.image}
          alt={challenge.title}
          className="w-[220px] h-[180px] object-cover hover:scale-105 transition-scale duration-300"
        />{" "}
        <h2 className="font-bold text-2xl self-start">{challenge.title}</h2>
        <div className="line-clamp-2 text-sm">{challenge.description}</div>
        <div className="flex items-center justify-between w-full">
          <div className=" flex items-center gap-x-1">
            <span className="text-sm opacity-70">by: </span>
            <span className="text-md font-semibold">{challenge.author}</span>
          </div>
          <div className="text-sm opacity-70">{challenge.date}</div>
        </div>
      </Link>
      <Link
        href={`/challenges/${challenge.id}`}
        className="w-full hover:opacity-80">
        <Button className="w-full">See details</Button>
      </Link>
    </div>
  );
};

export default ChallengeItem;
