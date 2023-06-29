import { User } from "@prisma/client";
import { IconType } from "react-icons";

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

export type InitialButtonProps = {
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  btnType: "button" | "submit" | "reset";
};

type FormBTN = InitialButtonProps & {
  formId: string;
  onClick?: never;
};
type PublicBTN = InitialButtonProps & {
  formId?: never;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type ButtonProps = FormBTN | PublicBTN;

export interface HeadingProps {
  title: string;
  subTitle?: string;
  center?: boolean;
}

type InitialEmptyStateProps = {
  title?: string;
  subtitle?: string;
};

type WithoutButton = InitialEmptyStateProps & {
  showBtn?: never;
  btnLabel?: never;
  btnPath?: never;
};

type WithButton = InitialEmptyStateProps & {
  showBtn: boolean;
  btnLabel: string;
  btnPath: string;
};
export type EmptyStateProps = WithoutButton | WithButton;

// States

export type AuthFormState = "login" | "signup";

// Values

export type SafeUser = Omit<
  User,
  "createdAt" | "updateAt" | "emailVerified"
> & {
  createdAt: string;
  updateAt: string;
  emailVerified?: string | null;
};

export type AuthForm = {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

export type OnSubmitProps = {
  setSubmitting: (value: boolean) => void;
  isSubmitting?: boolean;
};
