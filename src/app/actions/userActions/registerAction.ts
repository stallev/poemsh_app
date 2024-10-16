'use server';

import bcrypt from  'bcryptjs';
import * as z from 'zod';
import { prismaClient } from '@/lib/prismaClient';
import { RegistrationFormValues } from '@/components/page-specific/register/schemas/registerFormSchema';
import { ActionResult } from '@/types';
import { User } from '@prisma/client';
import { RequestErrors, RequestStatuses } from '@/constants/RequestStatusesErrors';
import { PasswordParams, UsernameParams } from '@/constants/UserConstants';

const registerSchema = z.object({
  name: z.string()
    .min(UsernameParams.MinLength)
    .max(UsernameParams.MaxLength),
  email: z.string().email(),
  password: z.string()
    .min(PasswordParams.MinLength)
    .max(PasswordParams.MaxLength)
    // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
});

export async function registerUserAction(data: RegistrationFormValues): Promise<ActionResult<User>> {
  const validated = registerSchema.safeParse(data);
  
  if (!validated.success) {
    throw new Error('Validation failed');
  }

  const { data: { name, email, password } } = validated;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await prismaClient.user.findUnique({
    where: {email}
  });

  if(existingUser) return {status: RequestStatuses.success, error: RequestErrors.user_already_exists};

  const newUser = await prismaClient.user.create({
    data: {
      name,
      email,
      passwordHash: hashedPassword,
    }
  });
  
  return {
    status: RequestStatuses.success,
    data: newUser
  };
}
