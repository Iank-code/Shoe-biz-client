import * as yup from "yup";
export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email address is required"),

  password: yup.string().required("Password is required"),
});

export type LoginInput = yup.InferType<typeof loginSchema>;
