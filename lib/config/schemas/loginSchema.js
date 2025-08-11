import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(8, { error: "Password must be at least 8 characters" })
  .regex(/[A-Z]/, {
    error: "Password must contain at least one uppercase letter",
  })
  .regex(/[a-z]/, {
    error: "Password must contain at least one lowercase letter",
  })
  .regex(/[0-9]/, { error: "Password must contain at least one number" })
  .regex(/[^A-Za-z0-9]/, {
    error: "Password must contain at least one special character",
  });

const loginSchema = z.object({
  email: z.email({ error: "Invalid email address" }),
  //hasAgreed: z.literal(true, { error: "Accept terms and conditions" }),
  // {TODO : "Not sure if the above field is required. Implement it later"}
  password: passwordSchema,
});

export default loginSchema;
