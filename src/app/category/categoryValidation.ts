import { z } from "zod";

export const validateCategory = z.object({
  body: z.object({
    name: z.string({ required_error: "name filed is required" }),
  }),
});
