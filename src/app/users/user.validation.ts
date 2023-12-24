import { z } from "zod";

export const validateCreateUser = z.object({
  body: z.object({
    name: z.string({ required_error: "name is required" }),
    email: z.string({ required_error: "email is required" }),
    password: z.string({ required_error: "password is required" }),
    bio: z.string().optional(),
    role: z.enum(["user", "admin"]).optional(),
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
    password: z.string().optional(),
    bio: z.string().optional(),
    role: z.enum(["user", "admin"]).optional(),
    phone: z.string().optional(),
    image: z.string().optional(),
    score: z.number().min(0).optional(),
    totalQuestion: z.number().min(0).optional(),
    address: z.string().optional(),
    age: z.string().optional(),
  }),
});
