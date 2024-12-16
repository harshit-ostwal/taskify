import { z } from "zod";

export const TaskSchema = z.object({
    title: z.string().min(1, { message: "Title Is Required And Cannot Be Empty." }),
    description: z.string().min(5, { message: "Description Must Be At Least 5 Characters Long." }).optional().nullish(),
    link: z.string().url({ message: "Link Must Be A Valid URL." }).optional().nullish(),
    priority: z.enum(["LOW", "MEDIUM", "HIGH", "URGENT"], { errorMap: () => ({ message: "Priority Must Be One Of Low, Medium, High, Or Urgent." }) }).optional().default("MEDIUM"),
    dueDate: z.date().refine((date) => date > new Date(), { message: "Due Date Must Be In The Future." }).optional().nullish(),
});