import NextAuth from "next-auth";

import discord from "next-auth/providers/discord";
import { env } from "~/env";

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    error: "/bad-login",
  },
  callbacks: {
    signIn: () => {
      return false;
    },
  },
  providers: [
    discord({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
  ],
});
