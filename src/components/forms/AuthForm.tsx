"use client";

//Hooks/Packges
import { useState, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Form, Formik } from "formik";
import { loginSchema, signupSchema } from "@/utils/validationSchemas";
import toast from "react-hot-toast";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";

//Component
import Input from "../inputs/Input";

//Types
import { AuthFormState, AuthForm } from "@/types";

const AuthForm = () => {
  //States / Hooks
  const [formState, setFormState] = useState<AuthFormState>("login");
  const router = useRouter();
  const { data: session, status } = useSession();

  //Actions

  //Login
  const login = useCallback(
    async (values: AuthForm) => {
      signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
        callbackUrl: "/",
      }).then(callback => {
        // Check if authenticated
        if (callback?.ok && status === "authenticated") {
          toast.success("Logged in successfully!");
          router.push("/");
        }

        if (callback?.error) {
          toast.error(callback.error);
        }
      });
    },
    [router, status]
  );

  // Register/Signup
  const register = useCallback(
    async (values: AuthForm) => {
      await axios
        .post(`/api/register`, values)
        .then(response => {
          // OnSuccess
          if (response.status == 200) {
            login(values);
          }
        })
        .catch(error => {
          //On Error
          if (error.response.data.error) {
            toast.error(error.response.data.error);
          } else {
            toast.error("Somthing went wrong");
          }
        });
    },
    [login]
  );
  //Toggle Form State
  const toggleFormState = useCallback(
    () => setFormState(current => (current === "login" ? "signup" : "login")),
    []
  );

  // Form initials
  const formInit = useMemo(() => {
    if (formState === "login") {
      return {
        values: { email: "", password: "" } as AuthForm,
        schema: loginSchema,
        onSubmit: login,
      };
    } else {
      return {
        values: {
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        } as AuthForm,
        schema: signupSchema,
        onSubmit: register,
      };
    }
  }, [formState, login, register]);

  return (
    <div className="flex justify-center">
      <div className="bg-black bg-opacity-80 px-16 py-16 self-center rounded-md lg:max-w-md w-full lg:w-2/5">
        <h2 className="text-white text-4xl mb-8 font-semibold ">
          {formState === "login" ? "Login" : "Signup"}
        </h2>
        <Formik
          initialValues={formInit.values}
          onSubmit={formInit.onSubmit}
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
