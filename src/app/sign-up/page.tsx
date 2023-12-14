"use client";
import Container from "@/components/ui/container";
import React, { useEffect, useState } from "react";
import {
  LogIn,
  Lock,
  Eye,
  EyeOff,
  MailIcon,
  GithubIcon,
  Code,
} from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import googleLogo from "../../../public/images/Google__G__logo.svg.png";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;

const formSchema = z.object({
  name: z.string().min(6, {
    message: "Your name should be at least 6 characters",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().refine((password) => passwordRegex.test(password), {
    message:
      "Your password should contain at least 8 characters, including 1 digit, 1 lowercase & 1 uppercase letter, and 1 special character (@#$%^&+=).",
  }),
});

export default function SignUp() {
  const [viewPassword, setViewPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const session = useSession();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.replace("/profile");
    }
  }, [session, router]);

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      const res = await fetch("/api/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.status == 400) {
        setError("This email already exist");
        setLoading(false);
      }
      if (res.status == 200) {
        router.push("/sign-in");
        setError("");
        setLoading(false);
      }
    } catch (error) {
      setError("Error ,try again");
      console.log(error);
      setLoading(false);
    }
  }
  return (
    <Container>
      <div className="flex w-full  min-h-screen">
        <div className="w-1/2  bg-login hidden md:block bg-cover bg-center">
          <div className="w-full h-full flex flex-col gap-8  justify-center p-4 bg-yellow-700 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border">
            <h1 className="font-bold text-4xl">
              Advance Your <span className="text-green-500">Skills</span> with
              Galsen <span className="text-blue-400">Coding</span> Challenge
            </h1>
            <p className="font-medium text-1xl">
              Join the coding community! Whether you are a beginner or an
              experienced developer, Galsen Coding Challenge provides a platform
              to enhance your skills. Dive into coding challenges, collaborate
              with others, and level up your programming expertise.
            </p>
          </div>
        </div>
        <div className="w-full h-full md:w-1/2 lg:w-1/2 px-7 py-4 flex items-center justify-center">
          <Card className=" w-full min-w-[230px] h-fit p-6 ">
            <CardHeader>
              <CardTitle>Register</CardTitle>
              <CardDescription>Access to your account</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8 flex flex-col">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex gap-2 items-center">
                          <Code />
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Your Full Name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex gap-2 items-center">
                          <MailIcon />
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="example@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex gap-2 items-center">
                          <Lock />
                          Password
                        </FormLabel>
                        <div className="flex gap-6 items-center justify-center">
                          <FormControl>
                            <Input
                              type={viewPassword ? "text" : "password"}
                              placeholder="Your password"
                              inputMode="numeric"
                              {...field}
                            />
                          </FormControl>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={(e) => {
                              e.preventDefault();
                              setViewPassword(!viewPassword);
                            }}>
                            {viewPassword ? <Eye /> : <EyeOff />}
                          </Button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" disabled={loading}>
                    Register
                    <LogIn />
                  </Button>
                </form>
              </Form>
              {error !== "" && (
                <CardDescription className="pt-3 text-red-500">
                  {error}
                </CardDescription>
              )}
            </CardContent>

            <Separator className="m-2" />
            <CardFooter className="flex ">
              <CardDescription>Already have an account ? </CardDescription>
              <Button variant="link" asChild>
                <Link href={"/sign-in"}>Sign In</Link>
              </Button>
            </CardFooter>

            <Separator className="m-2" />
            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-2">
              <Button
                variant={"outline"}
                className="w-full"
                onClick={() => {
                  signIn("github");
                }}>
                <Link href={"/"} className="flex items-center">
                  <GithubIcon className="mr-2" />
                  <span className=""> Continuer via Github</span>
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
}
