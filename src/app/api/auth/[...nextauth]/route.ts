import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { Account,User as AuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User"
import connect from "@/utils/db"
import bcrypt from "bcryptjs"
// interface NextAuthUser {
//   name?: string | null;
//   email?: string | null;
//   image?: string | null;
//   // Add other properties based on your needs
// }

// interface NextAuthAccount {
//   provider: string;
//   type: string;
//   id: string;
//   refreshToken?: string;
//   accessToken: string;
//   // Add other properties based on your needs
// }
// interface NextAuthProfile {
//   id: string;
//   name?: string | null;
//   email?: string | null;
//   image?: string | null;
//   // Add other properties based on your needs
// }

// (params: {
//   user: typeof User | null;
//   account: Account | null;
//   profile: any;
//   email?: { verificationRequest?: boolean };
//   credentials?: any;
// }) => Promise<boolean>;

const authOptions:NextAuthOptions = {
  // Configure one or more authentication providers
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
    
    // ...add more providers here
  ],
//   callbacks: {
//     async signIn(params) {
//     const { user, account, profile, email, credentials } = params;

//       // Check if the user already exists in MongoDB based on their email
//       const existingUser: typeof User | null = await User.findOne({
//         email: profile?.email as string,
//       });

//       if (existingUser) {
//         return existingUser;
//       } else {
//         const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
//         const randomPassword = () => Array.from({ length: 12 }, () => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&+="[Math.floor(Math.random() * 69)]).join('');
//         const validRandomPassword = randomPassword();

//         const hashedPassword =  bcrypt.hashSync(validRandomPassword,10);

//         const newUser = await User.create({
//           email: profile?.email,
//           name: profile?.name || "name",
//           image: profile?.image,
//           password:hashedPassword,
//           twitterUsername:"",
//           githubUsername:"",
//           linkedinUsername:"",
//         });
        
        
//         return newUser;
//       }
//     },
// },
}
const handler =  NextAuth(authOptions);
export {handler as GET, handler as POST}