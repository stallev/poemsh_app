import { compare } from "bcrypt";
import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import { loginServerSchema } from "@/components/page-specific/login/schemas/loginFormServerSchema"
import { getUserByEmail } from "./app/actions/userActions/loginAction";
 
export default { providers: [Credentials({
  name: 'credentials',
  async authorize(creds) {
    const validated = loginServerSchema.safeParse(creds);

    if(validated.success) {
      const { email, password } = validated.data;

      const user = await getUserByEmail(email);
      if(user?.passwordHash) {
        const comparedRes = await compare(password, user.passwordHash);
        console.log(comparedRes);
      }

      if(!user || !(await compare(password, user.passwordHash))) return null;

      return user;
    }

    return null;
  }
})] } satisfies NextAuthConfig
