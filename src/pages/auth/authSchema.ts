import { z } from "zod";

// ── Login ───────────────────────────────────────────────
export const loginSchema = z.object({
  email: z.string().email({ message: "Enter a valid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export type LoginFormData = z.infer<typeof loginSchema>;

// ── Sign Up ─────────────────────────────────────────────
export const signUpSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }), // ← fixed typo in your message
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(1, { message: "Phone number is required" }) // replaces .nonempty()
    .regex(/^\+?[0-9]{10,15}$/, { message: "Invalid phone number" }), // modern syntax
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" })
    .max(64, { message: "Password must be at most 64 characters" }),
});

export type signUpFormData = z.infer<typeof signUpSchema>;
