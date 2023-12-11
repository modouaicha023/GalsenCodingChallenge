import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User"
import connect from "@/utils/db"
import bcrypt from "bcryptjs"

const authOptions:NextAuthOptions = {
  providers: [
    CredentialsProvider({
        id:"credentials",
        name:"Credentials",
        credentials:{
            email:{label:"Your email",type:"email"},
            password:{label:"Your password",type:"password"},
        },
        async authorize(credentials:any){
            await connect();
            try {
                const user = await User.findOne({email:credentials.email});
                if (user){
                  const isPasswordCorrect = await bcrypt.compare(credentials.password,user.password);
                  if(isPasswordCorrect){
                      return user;
                  }
                }
                return null;
            } catch (error:any) {
                console.log(error);
                return null;
            }
        }
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    

  ],
}

const handler =  NextAuth(authOptions);
export {handler as GET, handler as POST}