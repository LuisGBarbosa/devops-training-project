import { z } from 'zod';

export const createUserSchema = z.object({
    body: z.object({ //body = tipo
        name: z
        .string({message: "The name must be a string."}) //types and issues (messsage)
        .min(3, { message: "The name must have minimum 3 letters."}),
        email: z.email({ message: "Invalid email"}),
        password: z
        .string()
        .min(6, "The password must have a mininum 6 caracters.")
    })
})