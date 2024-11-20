import { z } from "zod"

export const userSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters."
    }),
    email: z.string().email({
        message: "Invalid email address"
    }),
    // avatar: z.string().isURL({
    //     message: "Invalid URL"
    // })
})
