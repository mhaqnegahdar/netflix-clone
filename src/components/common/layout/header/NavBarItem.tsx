//Hooks/Packages
import { NavBarItemProps } from "@/types/props";
import Link from "next/link";

const NavBarItem = ({ label, link = "#" }: NavBarItemProps) => {
  return (
    <Link
      className="text-white hover:underline lg:hover:no-underline lg:hover:text-gray-300 transition"
      href={link}
    >
      {label}
    </Link>
  );
};

export default NavBarItem;
