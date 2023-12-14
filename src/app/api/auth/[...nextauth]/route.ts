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
    async session({ session }: { session: any }): Promise<Session> {
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

        return session;
      } catch (error: any) {
        console.error("Error in session callback:", error);
        return session;
      }
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },

    async signIn({ user, account, profile, email, credentials }) {
      if (account?.provider === "github") {
        await connect();
        const existingUser = await User.findOne({ email: profile?.email });

        if (existingUser) {
          console.log("User already exists");
          return true;
        } else {
          console.log("Creating new user");
          const generatedPassword = Math.random().toString(36).slice(-8);
          const hashedPassword = bcrypt.hashSync(generatedPassword, 10);

          const newUser = new User({
            name: (profile as any)?.name,
            email: (profile as any)?.email,
            password: hashedPassword,
            image: (profile as any)?.avatar_url,
            twitterUsername: (profile as any)?.twitter_username,
            githubUsername: (profile as any)?.login,
            linkedinUsername: "",
          });
          await newUser.save();

          Object.assign(user, {
            id: newUser._doc._id,
            name: newUser._doc.name,
            email: newUser._doc.email,
            image: newUser._doc.image,
            twitterUsername: newUser._doc.twitterUsername,
            githubUsername: newUser._doc.githubUsername,
            linkedinUsername: newUser._doc.linkedinUsername,
          });

          return true;
        }
      }

      return true;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
