import { z } from "zod";

export const ProfileSchema = z.object({
    name: z.string().min(3, "Name Must Be At Least 3 Characters Long"),
})