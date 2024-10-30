import NextAuth, { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"

type UserData = {
    author: {
        id: string;
        description: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        dateOfBirth: Date | null;
        userId: string;
    } | null;
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    emailVerified: Date | null;
    passwordHash: string;
}

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            data: UserData | null;
        } & DefaultSession["user"]
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        userData: UserData | null;
    }
}
