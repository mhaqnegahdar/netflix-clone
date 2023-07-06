//Hooks/Packages
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";

//Typws
import { MobileMenuProps } from "@/types/props";

const AccountMenu = ({ visible }: MobileMenuProps) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800">
      <div className="flex flex-col gap-3">
        <Link
          href="/profile"
          className="px-3 group/item flex flex-row gap-3 items-center w-full"
        >
          <figure className="w-8 h-8 rounded-md overflow-hidden">
            <Image
              src="/images/default-blue.png"
              alt="Profile"
              fill
              className="!static object-contain"
            />
          </figure>
          <p className="text-white text-sm group-hover/item:underline">
            UserName
          </p>
        </Link>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <button
          onClick={() => signOut()}
          className="px-3 text-center text-white text-sm hover:underline"
        >
          Sign out of Netflix
        </button>
      </div>
    </div>
  );
};

export default AccountMenu;
