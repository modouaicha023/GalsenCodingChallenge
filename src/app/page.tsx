"use client";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { MoveRightIcon } from "lucide-react";
export default function Home() {
  return (
    <Container>
      <div className="flex w-full flex-col">
        <div className="w-full h-screen flex md:flex-col  ">
          <div className="flex flex-col gap-8 items-center p-12 m-6 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border bg-green-600 rounded-md border-gray-100">
            <h1 className="font-bold text-4xl">
              Elevate your{" "}
              <span className="text-yellow-500"> Coding Skills</span> with Our{" "}
              <span className="text-green-500">Coding Challenge</span> Platform.
            </h1>
            <p className="font-medium text-1xl">
              Engage in coding challenges tailored for the Senegalese tech
              community. Simplify your learning experience, access a variety of
              coding challenges and projects, and enhance your programming
              skills. Stay updated on your progress and explore opportunities in
              the tech world.
            </p>
            <Button asChild>
              <Link
                href={"/challenges"}
                className="shadow-10px-black  font-bold text-3xl">
                All challenges{""} <MoveRightIcon size={44} />
              </Link>
            </Button>
          </div>
          

        </div>
        <div className="w-full h-screen">
          <div className="w-full h-full  flex flex-col gap-8 items-center px-8 bg-green-700 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border">
            <h1 className="font-bold text-4xl">
              Elevate your Coding Skills with Our{" "}
              <span className="text-green-500">Coding Challenge</span> Platform.
            </h1>
            <p className="font-medium text-1xl">
              Engage in coding challenges tailored for the Senegalese tech
              community. Simplify your learning experience, access a variety of
              coding challenges and projects, and enhance your programming
              skills. Stay updated on your progress and explore opportunities in
              the tech world.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
