import { z } from "zod";

export const validateCreateUser = z.object({
  body: z.object({
    name: z.string({ required_error: "name is required" }),
    email: z.string({ required_error: "email is required" }),
    passWord: z.string({ required_error: "passWord is required" }),
    bio: z.string().optional(),
    role: z.enum(["user", "admin"], { required_error: "role is required" }),
    phone: z.string().optional(),
    image: z.string().optional(),
    score: z.number().optional(),
    totalQuestion: z.number().optional(),
    address: z.string().optional(),
    age: z.string().optional(),
  }),
});

export const validateUpdateUser = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    passWord: z.string().optional(),
    bio: z.string().optional().optional(),
    role: z.enum(["user", "admin"]).optional(),
    phone: z.string().optional(),
    image: z.string().optional(),
    score: z.number().optional(),
    totalQuestion: z.number().optional(),
    address: z.string().optional(),
    age: z.string().optional(),
  }),
});
