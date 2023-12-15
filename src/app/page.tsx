"use client";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import devStuffImage from "../../public/images/Development-Team-coding.svg";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <Container>
      <div className="flex w-full flex-col bg-clip-padding  backdrop-filter backdrop-blur-lg bg-opacity-10   gap-6 p-6">
        <div
          className={` w-full min-h-screen flex flex-col items-center justify-evenly gap-10 md:gap-6 p-8  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90 rounded-lg ${
            theme === "light"
              ? "shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
              : "border-gray-100"
          }  border bg-black-700 `}>
          <div className="flex flex-col items-center justify-between md:flex-row gap-10">
            <div className="flex flex-col gap-8 w-full text-center md:text-left  md:w-1/2">
              <h1 className="font-bold text-3xl md:text-3xl">
                Elevate your{" "}
                <span className="text-yellow-500"> Coding Skills</span> with Our{" "}
                <span className="text-green-400">Coding Challenge</span>{" "}
                Platform.
              </h1>
              <p className="font-medium text-1xl">
                Engage in coding challenges tailored for the Senegalese tech
                community. Simplify your learning experience, access a variety
                of coding challenges and projects, and enhance your programming
                skills. Stay updated on your progress and explore opportunities
                in the tech world.
              </p>
            </div>
            <Image
              src={devStuffImage}
              alt="Developer"
              className="w-full md:w-1/2"
            />
          </div>
          <Button
            asChild
            size={"lg"}
            className="shadow-10px-black font-bold text-1xl sm:text-3xl p-8">
            <Link href={"/challenges"} className="flex gap-4">
              All challenges{""} <MoveRightIcon size={44} />
            </Link>
          </Button>
        </div>

        <div
          className={` w-full min-h-screen flex flex-col items-center justify-evenly gap-10 md:gap-6 p-8  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90 rounded-lg ${
            theme === "light"
              ? "shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
              : "border-gray-100"
          }  border bg-black-700 `}></div>
      </div>
    </Container>
  );
}
