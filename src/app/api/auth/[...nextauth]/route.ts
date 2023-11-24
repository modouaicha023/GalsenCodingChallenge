import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { Account,User as AuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User"
import connect from "@/utils/db"
import bcrypt from "bcryptjs"

export const authOptions:any = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        id:"credentials",
        name:"Credentials",
        credentials:{
            mail:{label:"Your email",type:"email"},
            password:{label:"Your password",type:"password"},
        },
        async authorize(credentials:any){
            await connect();
            try {
                const user = await User.findOne({mail:credentials.mail});
                if (user){
                  const isPasswordCorrect = await bcrypt.compare(credentials.password,user.password);
                  if(isPasswordCorrect){
                      return user;
                  }
                }
            } catch (error:any) {
                throw new Error(error);
            }

        }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // ...add more providers here
  ],
}

export const handler =  NextAuth(authOptions);
export {handler as GET, handler as POST}