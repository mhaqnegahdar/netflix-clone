//Hooks
import { redirect } from "next/navigation";

//Actions
import getCurrentUser from "@/actions/getCurrentUser";

// Components
import IndexClient from "./IndexClient";
import Billboard from "@/components/common/layout/Billboard";
import NavBar from "@/components/common/layout/header/NavBar";

export default async function Home() {
  const currentUser = await getCurrentUser();

  //if user is not logged in
  if (!currentUser) {
    redirect("/auth");
  }

  return (
    <>
      <NavBar currentUser={currentUser} />
      <Billboard />
    </>
  );
}
