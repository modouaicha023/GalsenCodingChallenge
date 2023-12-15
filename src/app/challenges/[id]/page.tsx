"use client";
import Container from "@/components/ui/container";
import { Challenge } from "@/lib/types";
import { useTheme } from "next-themes";
import notFoundImage from "@/../public/images/404.svg";
import Image from "next/image";
import { challenges as AllChallenges } from "@/app/api/data";
import ChallengeDetail from "@/components/ChallengeDetail";

const ChallengeDetailPage = ({ params }: { params: Challenge }) => {
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
      <div className="flex w-full flex-col bg-clip-padding  backdrop-filter backdrop-blur-lg bg-opacity-10   gap-6 p-6">
        <div
          className={`w-full min-h-screen gap-4 md:gap-6  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90 rounded-lg ${
            theme === "light"
              ? "shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
              : "border-gray-100"
          }  border bg-black-700 p-4 `}>
          <ChallengeDetail
            challenge={challenge as Challenge}
            theme={theme as string}
          />
        </div>
        <div
          className={`w-full min-h-screen gap-4 md:gap-6  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90 rounded-lg ${
            theme === "light"
              ? "shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
              : "border-gray-100"
          }  border bg-black-700 `}>
          <div className=""></div>
        </div>
      </div>
    </Container>
  );
};

export default ChallengeDetailPage;
