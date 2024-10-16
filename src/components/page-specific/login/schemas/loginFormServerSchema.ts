import * as z from 'zod';
import { PasswordParams } from '@/constants/UserConstants';

export const loginServerSchema = z.object({
  email: z.string().email(),
  password: z.string()
    .min(PasswordParams.MinLength)
    .max(PasswordParams.MaxLength),
    // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
});
