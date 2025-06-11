import { z } from "zod";

import { UserRole } from "@/common/enums/enums";

export const createUserSchema = z
  .object({
    email: z
      .string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
      })
      .email("Email must be a valid email address"),

    username: z
      .string({
        required_error: "Username is required",
        invalid_type_error: "Username must be a string",
      })
      .min(3, "Username must be at least 3 characters long")
      .max(20, "Username must be at most 20 characters long")
      .regex(/^[a-zA-Z0-9_.-]+$/, "Username contains invalid characters"),

    name: z
      .string({
        required_error: "First name is required",
        invalid_type_error: "First name must be a string",
      })
      .min(1, "First name cannot be empty"),

    lastName: z
      .string({
        required_error: "Last name is required",
        invalid_type_error: "Last name must be a string",
      })
      .min(1, "Last name cannot be empty"),

    role: z.enum(Object.values(UserRole) as [string, ...string[]], {
      required_error: "Role is required",
      invalid_type_error: "Role must be a valid UserRole",
    }),

    organization: z
      .string({
        invalid_type_error: "Organization must be a string",
      })
      .nullable(),

    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(24, { message: "Password must not exceed 24 characters" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/\d/, {
        message: "Password must contain at least one number",
      })
      .regex(/[^A-Za-z0-9]/, {
        message: "Password must contain at least one special character",
      }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(24, { message: "Password must not exceed 24 characters" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/\d/, {
        message: "Password must contain at least one number",
      })
      .regex(/[^A-Za-z0-9]/, {
        message: "Password must contain at least one special character",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type CreateUserSchema = z.infer<typeof createUserSchema>;
