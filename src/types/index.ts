// Props
export interface ChildrenProp {
  children: React.ReactNode;
}

export interface InputProps {
  name: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  disabled?: boolean;
  error?: string;
}

// States

export type AuthFormState = "login" | "signup";
