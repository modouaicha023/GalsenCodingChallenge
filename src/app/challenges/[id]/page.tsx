"use client";
import Container from "@/components/ui/container";
import { Challenge } from "@/lib/types";
import { useTheme } from "next-themes";
import notFoundImage from "@/../public/images/404.svg";
import Image from "next/image";
import { challenges as AllChallenges } from "@/app/api/data";

const ChallengeDetail = ({ params }: { params: Challenge }) => {
  const { theme, setTheme } = useTheme();

  const challenge = AllChallenges.find(
    (challengeItem) => challengeItem.id === params.id
  );
  if (!challenge)
    return (
      <div className="">
        <div className=" font-bold text-lg text-center m-10">
          Challenge not found🤧
        </div>
        <Image
          src={notFoundImage}
          alt={"not found"}
          width={400}
          height={400}
          className=" mx-auto "
        />
      </div>
    );
  return (
    <Container>
      <div
        className={`bg-${
          theme === "light"
            ? "white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
            : "282828"
        } max-w-[250px] max-h-400px sm:w-[300px]  p-4 rounded-md m-6 flex flex-col gap-4 items-center justify-centerflex-shrink-0   md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4`}>
        <img
          src={challenge?.image}
          alt={challenge?.title}
          className="w-full object-cover hover:scale-105 transition-scale duration-300"
        />{" "}
        <h2 className="font-bold text-2xl self-start">{challenge?.title}</h2>
        <div className="line-clamp-2 text-sm">{challenge?.description}</div>
        <div className="">{challenge?.author}</div>
        <div className="">{challenge?.date}</div>
        <div className="">{challenge?.author}</div>
      </div>
    </Container>
  );
};

export default ChallengeDetail;
