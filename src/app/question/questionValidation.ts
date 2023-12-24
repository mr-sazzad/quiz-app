import { z } from "zod";

export const validateCreateQuestion = z.object({
  body: z.object({
    text: z.string({ required_error: "text is required" }),
    options: z.array(z.string()).nonempty("options is required"),
    correctAnswers: z.array(z.number()).nonempty("correctAnswers is required"),
    explanation: z.string({ required_error: "explanation is required" }),
    categoryId: z.string({ required_error: "categoryId is required" }),
  }),
});

export const validateUpdateQuestion = z.object({
  body: z.object({
    text: z.string().optional(),
    options: z.array(z.string()).optional(),
    correctAnswers: z.array(z.number()).optional(),
    explanation: z.string().optional(),
    categoryId: z.string().optional(),
  }),
});
