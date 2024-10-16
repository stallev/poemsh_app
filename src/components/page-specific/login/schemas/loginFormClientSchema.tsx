import * as z from 'zod';
import { LoginFormErrors } from '../components/LoginForm/types';
import { PasswordParams } from '@/constants/UserConstants';

export const createLoginClientSchema = (translations: {
  errors: LoginFormErrors
}) => {
  return z.object({
    email: z.string().email({ message: translations.errors.email_invalid }),
    password: z.string()
      .min(PasswordParams.MinLength, { message: translations.errors.password_min_length })
      .max(PasswordParams.MaxLength, { message: translations.errors.password_max_length }),
      // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
      //   message: translations.errors.password_complexity,
      // }),
  });
};

export type LoginClientFormValues = z.infer<ReturnType<typeof createLoginClientSchema>>;