import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .regex(/^\+?[\d\s\-().]{7,20}$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  service: z.enum(
    [
      "kitchen-remodel",
      "bathroom-remodel",
      "cabinet-installation",
      "cabinet-supply",
      "interior-repairs",
      "other",
    ],
    { message: "Please select a service" }
  ),
  timeline: z.enum(["asap", "1-3-months", "3-6-months", "planning"], {
    message: "Please select a timeline",
  }),
  message: z
    .string()
    .min(10, "Please provide a bit more detail (at least 10 characters)"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
