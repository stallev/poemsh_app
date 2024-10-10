import NextAuth from 'next-auth'; 
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from './auth.config';
import { prismaClient } from './lib/prismaClient';
 
export const {
  handlers: { GET, POST },
  signIn, signOut, auth
} = NextAuth({
  adapter: PrismaAdapter(prismaClient),
  session: { strategy: "jwt" },
  ...authConfig,
})