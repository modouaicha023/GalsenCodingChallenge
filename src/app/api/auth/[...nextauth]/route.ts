import NextAuth, { NextAuthOptions, Session } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Your email", type: "email" },
        password: { label: "Your password", type: "password" },
      },
      async authorize(credentials: any) {
        await connect();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            }
          }
          return null;
        } catch (error: any) {
          console.error(error);
          return null;
        }
      },
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],

  callbacks: {
    async session({
      session,
      user,
    }: {
      session: any;
      user: any;
    }): Promise<Session> {
      try {
        await connect();
        const userData = await User.findOne({ email: session.user.email });

        if (userData) {
          Object.assign(session.user, {
            id: userData._doc._id,
            name: userData._doc.name,
            email: userData._doc.email,
            image: userData._doc.image,
            twitterUsername: userData._doc.twitterUsername,
            githubUsername: userData._doc.githubUsername,
            linkedinUsername: userData._doc.linkedinUsername,
          });
        }

        //  else {
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
        // }

        return session;
      } catch (error: any) {
        console.error("Error in session callback:", error);
        return session;
      }
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
