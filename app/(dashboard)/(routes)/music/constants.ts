import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(10, {
    message: "Prompt must be at least 10 characters"
  }),
})