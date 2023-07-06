import { IconType } from "react-icons";
import { SafeUser } from "./database";
import { Movie } from "@prisma/client";

// Props
type ChildrenProp = {
  children: React.ReactNode;
};

type InputProps = {
  name: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  disabled?: boolean;
  error?: string;
};

type InitialButtonProps = {
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

type ButtonProps = FormBTN | PublicBTN;

interface HeadingProps {
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
type EmptyStateProps = WithoutButton | WithButton;

type NavBarItemProps = {
  label: string;
  link: string;
};

type MobileMenuProps = {
  visible: boolean;
};

type NavBarProps = {
  currentUser: SafeUser;
};

type AccountMenuProps = {
  visible: boolean;
  currentUser: SafeUser;
};

type MovieListProps = {
  title: string;
  movies: Movie[];
};

type MovieCardProps = {
  movie: Movie;
};

//Export
export type {
  ChildrenProp,
  InputProps,
  ButtonProps,
  HeadingProps,
  EmptyStateProps,
  NavBarItemProps,
  MobileMenuProps,
  NavBarProps,
  AccountMenuProps,
  MovieListProps,
  MovieCardProps,
};
