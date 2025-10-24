import { z } from 'zod';

export const SigninFormSchema = z.object({
    username: z.email({ message: 'please enter a vaild email address. '}).trim(),
    password: z.string().min(6, { message: 'password must be atleast 6 characters long.'})
    .trim(),
})
