'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { prismaClient } from '@/lib/prismaClient';
import { LoginClientFormValues } from '@/components/page-specific/login/schemas/loginFormClientSchema';
import { loginServerSchema } from '@/components/page-specific/login/schemas/loginFormServerSchema';
import { RequestStatuses, RequestErrors } from '@/constants/RequestStatusesErrors';
import { ActionResult } from '@/types';

export async function loginUserAction(data: LoginClientFormValues): Promise<ActionResult<string>> {
  const validated = loginServerSchema.safeParse(data);
  
  if(!validated) return {status: RequestStatuses.error, error: RequestErrors.validation_login_error};

  try {
    const result = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false
    });
    console.log(result);

    return {status: RequestStatuses.success, data: 'Logged in'};
  } catch (error) {
    if(error instanceof AuthError) {
      console.log(error)
      switch (error.type) {
        case 'CredentialsSignin':
          return {status: RequestStatuses.error, error: RequestErrors.invalid_credentials};
      
        default:
          return {status: RequestStatuses.error, error: RequestErrors.something_wents_wrong};
      }
    } else {
      return {status: RequestStatuses.error, error: RequestErrors.something_wents_wrong};
    }
  }
}

export async function getUserByEmail(email: string) {
  return prismaClient.user.findUnique({where: {email}})
}

export async function getUserById(id: string) {
  return prismaClient.user.findUnique({where: {id}})
}
