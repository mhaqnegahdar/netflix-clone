"use client";

//Hooks/Packges
import { useState, useMemo, useCallback } from "react";
import { Form, Formik } from "formik";
import { loginSchema, signupSchema } from "@/utils/validationSchemas";

//Component
import Input from "../inputs/Input";

//Types
import { AuthFormState } from "@/types";

const AuthForm = () => {
  const [formState, setFormState] = useState<AuthFormState>("login");

  // Form initials
  const formInit = useMemo(() => {
    if (formState === "login") {
      return {
        values: { email: "", password: "" },
        schema: loginSchema,
      };
    } else {
      return {
        values: { name: "", email: "", password: "", confirmPassword: "" },
        schema: signupSchema,
      };
    }
  }, [formState]);

  //Actions
  //Submit
  const onSubmit = useCallback(() => {}, []);
  //Toggle Form State
  const toggleFormState = useCallback(
    () => setFormState(current => (current === "login" ? "signup" : "login")),
    []
  );

  return (
    <div className="flex justify-center">
      <div className="bg-black bg-opacity-80 px-16 py-16 self-center rounded-md lg:max-w-md w-full lg:w-2/5">
        <h2 className="text-white text-4xl mb-8 font-semibold ">
          {formState === "login" ? "Login" : "Signup"}
        </h2>
        <Formik
          initialValues={formInit.values}
          onSubmit={onSubmit}
          validationSchema={formInit.schema}
        >
          {({ errors, touched }) => {
            return (
              <Form className="flex flex-col gap-4">
                {formState === "signup" ? (
                  <Input
                    name="name"
                    label="Name"
                    error={
                      touched.name && errors.name ? errors.name : undefined
                    }
                  />
                ) : null}

                <Input
                  name="email"
                  label="Email"
                  type="email"
                  error={
                    touched.email && errors.email ? errors.email : undefined
                  }
                />
                <Input
                  name="password"
                  label="Password"
                  type="password"
                  error={
                    touched.password && errors.password
                      ? errors.password
                      : undefined
                  }
                />
                {formState === "signup" ? (
                  <Input
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    error={
                      touched.confirmPassword && errors.confirmPassword
                        ? errors.confirmPassword
                        : undefined
                    }
                  />
                ) : null}
                <button
                  type="submit"
                  className="bg-red-600 py-3 text-white rounded-md w-full hover:bg-red-700 transition"
                >
                  {formState === "login" ? "Login" : "Signup"}
                </button>
                <p className="text-neutral-500 mt-12">
                  {formState === "login"
                    ? "First time using Netflix?"
                    : "Already have an account?"}

                  <button
                    type="button"
                    className="text-white ml-1 hover:underline cursor-pointer"
                    onClick={toggleFormState}
                  >
                    {formState === "login" ? "Create an account" : "Login"}
                  </button>
                </p>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default AuthForm;
