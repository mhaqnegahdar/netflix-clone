"use client";
//Hooks/ Packages
import { useRouter } from "next/navigation";

// Icons
import { AiOutlineArrowLeft } from "react-icons/ai";

const BackHomeButton = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/")}>
      <AiOutlineArrowLeft className="text-white" size={40} />
    </button>
  );
};

export default BackHomeButton;
