import { z } from "zod";
// for login
export const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be 6 character"),
});
export type LoginFormData = z.infer<typeof loginSchema>;

// signup

export const signUpSchema = z.object({
  firstName: z.string().nonempty("First name is required"),
  lastName: z.string().nonempty("First name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .nonempty("Phone number is required")
    .regex(/^\+?[0-9]{10,15}$/, "Invalid phone number"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(64, "Password must be at most 64 characters"),
});
export type signUpFormData = z.infer<typeof signUpSchema>;
