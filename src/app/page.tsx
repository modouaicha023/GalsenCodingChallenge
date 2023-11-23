"use client";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import devStuffImage from "../../public/images/Hire-JS-Dev.svg";
export default function Home() {
  return (
    <Container>
      <div className="flex w-full flex-col bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border  gap-6 p-6">
        <div className="w-full h-fit md:h-screen flex flex-col items-center justify-evenly gap-10 md:gap-6 p-8  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 rounded-lg border-gray-100 border bg-green-700 ">
          <div className="flex flex-col items-center justify-between md:flex-row gap-10">
            <div className="flex flex-col gap-8 w-full md:w-1/2">
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
            <Image src={devStuffImage} alt="Developer" className="w-full md:w-1/2" />
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

        <div className="w-full h-fit md:h-screen flex flex-col items-center justify-evenly gap-10 md:gap-6 p-8  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-lg border-gray-100 border bg-gray-600 ">
          
        </div>
      </div>
    </Container>
  );
}
