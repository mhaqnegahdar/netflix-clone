"use client";

// Hooks
import { SessionProvider } from "next-auth/react";

//Types
import { ChildrenProp } from "@/types/props";

const OuterProviders = ({ children }: ChildrenProp) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default OuterProviders;
