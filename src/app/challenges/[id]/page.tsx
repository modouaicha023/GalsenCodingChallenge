"use client";
import Container from "@/components/ui/container";
import { Challenge } from "@/lib/types";
import { useTheme } from "next-themes";
import notFoundImage from "@/../public/images/404.svg";
import Image from "next/image";
import { challenges as AllChallenges } from "@/app/api/data";
import ChallengeDetail from "@/components/ChallengeDetail";
import { useState } from "react";
import { z } from "zod";
import { Link as LinkIcon, Github } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
// import { ChallengeUserData } from "@/lib/types";

const formSchema = z.object({
  challengerId: z.string(),
  challengeId: z.string(),
  githubRepoSolution: z.string().url(),
  previewSolution: z.string().url(),
});
const ChallengeDetailPage = ({ params }: { params: Challenge }) => {
  const { theme } = useTheme();
  const [data, setData] = useState({ challengerId: "", challengeId: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSumbitBtnClicked, setIsSumbitBtnClicked] = useState(false);
  // const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      challengerId: data.challengerId,
      challengeId: data.challengeId,
      githubRepoSolution: "",
      previewSolution: "",
    },
  });

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
          {/* Submit Form */}
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
        {/* <div
          className={`w-full min-h-screen gap-4 md:gap-6  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90 rounded-lg ${
            theme === "light"
              ? "shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
              : "border-gray-100"
          }  border bg-black-700 `}>
          <div className=""></div>
        </div> */}
      </div>
    </Container>
  );
};

export default ChallengeDetailPage;
