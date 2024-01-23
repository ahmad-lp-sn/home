import { z } from "zod";

export const useRejesterFromSchema = () => {
  return z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    salary: z.string(),
  });
};
