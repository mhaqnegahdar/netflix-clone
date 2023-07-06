// States

type AuthFormState = "login" | "signup";

// Values

type AuthForm = {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

type OnSubmitProps = {
  setSubmitting: (value: boolean) => void;
  isSubmitting?: boolean;
};

// Export
export type { AuthFormState, AuthForm, OnSubmitProps };
