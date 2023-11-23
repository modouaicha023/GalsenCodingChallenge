"use client";
import Container from "@/components/ui/container";
import React, { useState } from "react";
import { LogIn, Phone, Lock, Eye, EyeOff } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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

const formSchema = z.object({
  phone: z.string().min(9, {
    message: "Your number must be at least 9 digits.",
  }),
  password: z.string().min(4, {
    message: "Your password must be at least 4 digits",
  }),
});
export default function Home() {
  const [viewPassword, setViewPassword] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Container>
      <div className="flex w-full  h-screen">
        <div className=" w-1/2 h-full bg-login hidden md:block bg-cover bg-center">
          <div className="w-full h-full flex flex-col gap-8 items-center justify-center p-4 bg-yellow-700  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border">
            <h1 className="font-bold text-4xl">
              Optimize your <span className="text-yellow-500">Bakery</span> with
              Our <span className="text-yellow-500">Simplified</span> Management
              Platform .
            </h1>
            <p className="font-medium text-1xl">
              Log in for a simplified management experience. Manage your bakery
              with ease, access all the tools you need to grow your business,
              track sales, and stay informed about the status of your bakery.
            </p>
          </div>
        </div>
        <div className="w-full h-full md:w-1/2 lg:w-1/2 px-7 py-4 flex items-center justify-center">
          <Card className=" w-full min-w-[230px] h-fit p-6 ">
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Access to your account with your phone number
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8 flex flex-col">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex gap-2 items-center">
                          <Phone />
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="spin-button-none"
                            type="number"
                            placeholder="771683124"
                            inputMode="numeric"
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
                        <FormLabel className="flex gap-2 items-center justify-center">
                          <Lock />
                          Password
                        </FormLabel>
                        <div className="flex gap-6 items-center justify-center">
                          <FormControl>
                            {/* <Input
                              type={viewPassword ? "text" : "password"}
                              placeholder="Your password"
                              inputMode="numeric"
                              {...field}
                            /> */}
                          </FormControl>
                          {/* <OTPinput /> */}
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
                  <Button type="submit" size="lg">
                    Login
                    <LogIn />
                  </Button>
                </form>
              </Form>
            </CardContent>
            <Separator className="m-2" />
            <CardFooter className="flex ">
              <CardDescription>Don&apos;t have an account ? </CardDescription>
              <Button variant="link" asChild>
                <Link href={"/sign-up"}>Sign Up</Link>
              </Button>
            </CardFooter>
            {/*Auth Google*/}
            {/* <Separator className="m-2" />
            <div className="w-full flex justify-center">
              <Button variant={"outline"}>
                <Link href={"/google"}>
                <Image
                  src={
                    "https://cdn-icons-png.flaticon.com/512/2504/2504739.png"
                  }
                  width={24}
                  height={24}
                  alt="Google Icon"
                  className="mr-2"
                />
                Continuer via Google
                </Link>
              </Button>
            </div> */}
          </Card>
        </div>
      </div>
    </Container>
  );
}
