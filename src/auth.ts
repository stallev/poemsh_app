import NextAuth from 'next-auth'; 
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from './auth.config';
import { prismaClient } from './lib/prismaClient';
 
export const {
  handlers: { GET, POST },
  signIn, signOut, auth
} = NextAuth({
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const userData = await prismaClient.user.findUnique({
          where: { id: user.id },
          include: { author: true }
        });
        token.userData = userData;
      }
      return token;
    },
  
    async session({ token, session }) {
      if (token?.sub && session.user) {
        session.user.data = token.userData;
      }
      return session;
    }
  },
  adapter: PrismaAdapter(prismaClient),
  session: { strategy: "jwt" },
  ...authConfig,
});