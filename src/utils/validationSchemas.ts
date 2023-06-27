import { string, object, number, ref, array } from "yup";

export const signupSchema = object({
  name: string().required("Required!"),
  email: string().email("Invalid email format!").required("Required"),
  password: string()
    .required("Required")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
      "Must be at least 8 characters with 1 uppercase letter, and 1 number"
    ),
  confirmPassword: string()
    .required("Required")
    .oneOf([ref("password")], "Password mismatch")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
      "Must be at least 8 characters with 1 uppercase letter, and 1 number"
    ),
});

export const loginSchema = object({
  email: string().email("Invalid email format!").required("Required"),
  password: string()
    .required("Required")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
      "Must be at least 8 characters with 1 uppercase letter, and 1 number"
    ),
});
