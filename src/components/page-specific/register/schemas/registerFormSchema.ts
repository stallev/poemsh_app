import * as z from 'zod';
import { RegistrationFormErrors } from '../components/RegisterForm/types';
import { PasswordParams, UsernameParams } from '@/constants/UserConstants';

export const createRegistrationSchema = (translations: {
  errors: RegistrationFormErrors
}) => {
  return z.object({
    name: z.string()
      .min(UsernameParams.MinLength, { message: translations.errors.name_required })
      .max(UsernameParams.MaxLength, { message: translations.errors.name_max_length }),
    email: z.string().email({ message: translations.errors.email_invalid }),
    password: z.string()
      .min(PasswordParams.MinLength, { message: translations.errors.password_min_length })
      .max(PasswordParams.MaxLength, { message: translations.errors.password_max_length })
      // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
      //   message: translations.errors.password_complexity,
      // }),
  });
};

export type RegistrationFormValues = z.infer<ReturnType<typeof createRegistrationSchema>>;