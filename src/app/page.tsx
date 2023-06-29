//Hooks
import { redirect } from "next/navigation";

//Actions
import getCurrentUser from "@/actions/getCurrentUser";

// Components
import EmptyState from "@/components/EmptyState";
import IndexClient from "./IndexClient";

export default async function Home() {
  const currentUser = await getCurrentUser();

  //if user is not logged in
  if (!currentUser) {
    redirect("/auth");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-white p-24">
      Netflix Clone
      <IndexClient />
    </main>
  );
}
