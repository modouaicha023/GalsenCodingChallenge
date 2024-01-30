"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Challenge } from "@/lib/types";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { challengers } from "@/app/api/data";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { Link as LinkIcon, Github } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ChallengeDetail = ({
  challenge,
  theme,
}: {
  challenge: Challenge;
  theme: string;
}) => {
  const [data, setData] = useState({ challengerId: "", challengeId: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSumbitBtnClicked, setIsSumbitBtnClicked] = useState(false);

  const formSchema = z.object({
    challengerId: z.string(),
    challengeId: z.string(),
    githubRepoSolution: z.string().url(),
    previewSolution: z.string().url(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      challengerId: data.challengerId,
      challengeId: data.challengeId,
      githubRepoSolution: "",
      previewSolution: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    // try {
    //   setLoading(true);
    //   const res = await fetch("/api/sign-up", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });
    //   if (res.status == 400) {
    //     setError("This email already exist");
    //     setLoading(false);
    //   }
    //   if (res.status == 200) {
    //     setError("");
    //     setLoading(false);
    //   }
    // } catch (error) {
    //   setError("Error ,try again");
    //   console.error(error);
    //   setLoading(false);
    // }
  }
  return (
    <div
      className={`bg-${
        theme === "light"
          ? "white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
          : "282828"
      } w-full max-h-400px p-4 rounded-md  flex flex-col gap-4 `}>
      <div className="hover:opacity-95 flex gap-4 flex-col breakpoint:flex-row ">
        <div className="flex flex-col gap-2">
          <img
            src={challenge.image}
            alt={challenge.title}
            className=" h-[280px] object-cover"
          />
          <div className="flex items-center justify-between w-full">
            <div className=" flex items-center gap-x-1">
              <span className="text-sm opacity-70">by: </span>
              <span className="text-md font-semibold">{challenge.author}</span>
            </div>
            <div className="text-sm opacity-70">{challenge.date}</div>
          </div>
          <div className="flex gap-4 breakpoint:flex-col font-extrabold text-lg">
            {/* <Button className="w-full text-black hover:opacity-80">
              Participate
            </Button> */}
            <Button
              className="w-full hover:opacity-80 text-black bg-green-600 hover:bg-green-600"
              onClick={() => setIsSumbitBtnClicked(!isSumbitBtnClicked)}>
              Sumbit Solution
            </Button>
          </div>
          <div className="text-lg flex flex-col  gap-2 font-medium border border-gray-300 rounded-sm p-2 w-full ">
            <span className="opacity-70 text-center">Submissions</span>
            <div className="flex gap-2 flex-wrap items-center justify-center">
              {challengers && challengers.length > 0 ? (
                challengers.map((challenger, index) => (
                  <div key={index} className="flex gap- items-center w-fit">
                    <img
                      src={(challenger as { image: string })?.image}
                      alt={(challenger as { name?: string })?.name}
                      className="object-cover h-5 w-5 rounded-full"
                    />
                    <div className="text-sm">
                      {(challenger as { name: string })?.name}
                    </div>
                  </div>
                ))
              ) : (
                <div>No Submissions</div>
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-2 flex-col w-full break-words">
          <h2 className="font-bold text-2xl self-start text-green-600 text-center w-full">
            {challenge.title}
          </h2>
          <div className="text-lg flex flex-col items-center gap-2 font-medium border border-gray-300 rounded-sm p-2 w-full ">
            <span className="opacity-70">Descripition</span>
            <span>{challenge.description}</span>
          </div>
          <div className="text-lg flex flex-col gap-2 font-medium border border-gray-300 rounded-sm p-2 w-full ">
            <span className="opacity-70 text-center">Features</span>
            <ol className="flex flex-col px-6">
              {challenge.features.map((feature, index) => (
                <li key={index} className="list-decimal ">
                  {feature}
                </li>
              ))}
            </ol>
          </div>
          <div className="text-lg flex flex-col gap-2 font-medium border border-gray-300 rounded-sm p-2 w-full">
            <span className="opacity-70 text-center">Guidelines</span>
            <ol className="flex flex-col px-6">
              {challenge.guidelines.map((guideline, index) => (
                <li key={index} className="list-decimal ">
                  {guideline}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      {/* Submission Form */}
      {isSumbitBtnClicked && (
        <div className="flex w-full items-center justify-center ">
          <div className="w-full max-w-none md:max-w-[600px]  px-7 py-4 flex items-center justify-center">
            <Card className=" w-full min-w-[230px] h-fit p-6 ">
              <CardHeader>
                <CardTitle>Submission Form</CardTitle>
                <CardDescription>
                  Sumbit your solution to this challenge.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 flex flex-col">
                    <FormField
                      control={form.control}
                      name="githubRepoSolution"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex gap-2 items-center">
                            <Github />
                            Github Repository Solution
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Fill with your github repository URL"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="previewSolution"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex gap-2 items-center">
                            <LinkIcon />
                            Live Solution
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Fill with the Live Solution URL"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" size="lg" disabled={loading}>
                      Submit my solution
                    </Button>
                  </form>
                </Form>
                {error !== "" && (
                  <CardDescription className="pt-3 text-red-500">
                    {error}
                  </CardDescription>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChallengeDetail;
