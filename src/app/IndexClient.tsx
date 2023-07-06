"use client";
import Button from "@/components/common/Button";
import { signOut } from "next-auth/react";

const IndexClient = () => {
  return <Button label="Logout" btnType="button" onClick={() => signOut()} />;
};

export default IndexClient;
