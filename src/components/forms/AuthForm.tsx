"use client";

//Hooks/Packges
import { useState, useMemo, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { Form, Formik, FormikProps } from "formik";
import { loginSchema, signupSchema } from "@/utils/validationSchemas";
import toast from "react-hot-toast";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";

// Icons
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

//Component
import Input from "../inputs/Input";
import Button from "../common/Button";

//Types
import { AuthFormState, AuthForm, OnSubmitProps } from "@/types/form-values";

const AuthForm = () => {
  //States / Hooks
  const [formState, setFormState] = useState<AuthFormState>("login");
  const router = useRouter();
  const formRef = useRef<FormikProps<AuthForm>>(null);
  const { data: session, status } = useSession();

  //Actions

  //Login
  const login = useCallback(
    async (values: AuthForm, { setSubmitting }: OnSubmitProps) => {
      // Authentication
      signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
        callbackUrl: "/",
      })
        .then(callback => {
          // Check if authenticated
          if (callback?.ok && status === "authenticated") {
            toast.success("Logged in successfully!");
            router.push("/");
          }
          // Error authorizing user
          if (callback?.error) {
            toast.error(callback.error);
          }
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
    [router, status]
  );

  // Register/Signup
  const register = useCallback(
    async (values: AuthForm, { setSubmitting }: OnSubmitProps) => {
      await axios
        .post(`/api/register`, values)
        .then(response => {
          // OnSuccess
          if (response.status == 200) {
            toast.success("Registered successfully!");
            login(values, { setSubmitting });
          }
        })
        .catch(error => {
          //On Error
          if (error.response.data.error) {
            toast.error(error.response.data.error);
          } else {
            toast.error("Somthing went wrong");
          }
        })
        .finally(() => setSubmitting(false));
    },
    [login]
  );
  //Toggle Form State
  const toggleFormState = useCallback(() => {
    setFormState(current => (current === "login" ? "signup" : "login"));
    formRef.current?.resetForm(); //reset inputs state
  }, []);

  // Form initials
  const formInit = useMemo(() => {
    if (formState === "login") {
      return {
        values: { email: "", password: "" } as AuthForm,
        schema: loginSchema,
        onSubmit: login,
        formId: "login_form",
        btnLabel: "Login",
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
        formId: "register_form",
        btnLabel: "Signup",
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
          innerRef={formRef}
          initialValues={formInit.values}
          onSubmit={formInit.onSubmit}
          validationSchema={formInit.schema}
        >
          {({ errors, touched, isSubmitting }) => {
            return (
              <Form className="flex flex-col gap-4" id={formInit.formId}>
                {formState === "signup" ? (
                  <Input
                    name="name"
                    label="Name"
                    disabled={isSubmitting}
                    error={
                      touched.name && errors.name ? errors.name : undefined
                    }
                  />
                ) : null}

                <Input
                  name="email"
                  label="Email"
                  type="email"
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                />
                {formState === "signup" ? (
                  <Input
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    disabled={isSubmitting}
                    error={
                      touched.confirmPassword && errors.confirmPassword
                        ? errors.confirmPassword
                        : undefined
                    }
                  />
                ) : null}

                <Button
                  label={formInit.btnLabel}
                  disabled={isSubmitting}
                  btnType="submit"
                  formId={formInit.formId}
                />
                {/* OAuth */}
                <div className="flex flex-row w-full mt-8 items-center justify-center gap-4 ">
                  <button
                    type="button"
                    onClick={() => {
                      signIn("google");
                    }}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition hover:opacity-80"
                  >
                    <FcGoogle size={30} />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      signIn("github");
                    }}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition hover:opacity-80"
                  >
                    <AiFillGithub size={30} />
                  </button>
                </div>
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
