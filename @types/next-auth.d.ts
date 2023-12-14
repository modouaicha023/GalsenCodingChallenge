import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image: string;
      twitterUsername: string;
      githubUsername: string;
      linkedinUsername: string;
    } & DefaultSession["user"];
  }
}
