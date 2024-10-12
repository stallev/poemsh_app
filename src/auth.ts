import NextAuth from 'next-auth'; 
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from './auth.config';
import { prismaClient } from './lib/prismaClient';
 
export const {
  handlers: { GET, POST },
  signIn, signOut, auth
} = NextAuth({
  callbacks: {
    async session({ token, session }) {
      if (token?.sub && session.user) {
        session.user.id = token.sub
      }
      return session;
    }
  },
  adapter: PrismaAdapter(prismaClient),
  session: { strategy: "jwt" },
  ...authConfig,
});