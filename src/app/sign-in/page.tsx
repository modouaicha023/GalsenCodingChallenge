"use client";
import Container from "@/components/ui/container";
import React, { useEffect, useState } from "react";
import {
  LogIn,
  Phone,
  Lock,
  Eye,
  EyeOff,
  MailIcon,
  GithubIcon,
} from "lucide-react";
import { useForm } from "react-hook-form";
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
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;

const formSchema = z.object({
  mail: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().refine((password) => passwordRegex.test(password), {
    message:
      "Your password should contain at least 8 characters, including 1 digit, 1 lowercase & 1 uppercase letter, and 1 special character (@#$%^&+=).",
  }),
});
export default function SignIn() {
  const [viewPassword, setViewPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const session = useSession();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mail: "",
      password: "",
    },
  });

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.replace("/dashboard");
    }
  }, [session, router]);

  async function onSubmit(data: z.infer<typeof formSchema>) {    
    setLoading(true);
    setError("");
    const res = await signIn("credentials", {
      redirect: false,
      ...data,
    });

    if (res?.error) {
      setError("Invalid email or password");
      setLoading(false);

      if (res?.url) {
        setLoading(false);
        router.replace("/dashboard");
      }
    } else {
      setError("");
      setLoading(false);
    }
  }

  return (
    <Container>
      <div className="flex w-full  h-screen">
        <div className="w-1/2 h-screen bg-login hidden md:block bg-cover bg-center">
          <div className="w-full h-full flex flex-col gap-8  justify-center p-4 bg-yellow-700  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border">
            <h1 className="font-bold text-4xl">
              Elevate Your <span className="text-yellow-500">Expertise</span>{" "}
              through Galsen <span className="text-green-500">Development</span>{" "}
              Journey
            </h1>
            <p className="font-medium text-1xl">
              Become part of the coding community! Whether you're just starting
              out or an seasoned developer, Galsen Coding Challenge offers a
              space to elevate your skills. Engage in coding challenges,
              collaborate with fellow enthusiasts, and boost your programming
              expertise.
            </p>
          </div>
        </div>
        <div className="w-full h-full md:w-1/2 lg:w-1/2 px-7 py-4 flex items-center justify-center">
          <Card className=" w-full min-w-[230px] h-fit p-6 ">
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Create your Account</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8 flex flex-col">
                  <FormField
                    control={form.control}
                    name="mail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex gap-2 items-center">
                          <MailIcon />
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="spin-button-none"
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
                    Login
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
              <CardDescription>Don&apos;t have an account ? </CardDescription>
              <Button variant="link" asChild>
                <Link href={"/sign-up"}>Sign Up</Link>
              </Button>
            </CardFooter>

            <Separator className="m-2" />
            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-2">
              <Button variant={"outline"} className="w-full">
                <Link href={"/"} className="flex items-center">
                  <Image
                    src={googleLogo}
                    width={24}
                    height={24}
                    alt="Google Icon"
                    className="mr-2"
                  />
                  <span className="text-sm">Continuer via Google</span>
                </Link>
              </Button>
              <Button variant={"outline"} className="w-full">
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
