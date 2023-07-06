// Types
import { navbarItems } from "@/constants/navbar";
import { MobileMenuProps } from "@/types/props";
import Link from "next/link";
import NavBarItem from "./NavBarItem";

const MobileMenu = ({ visible }: MobileMenuProps) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800">
      <div className="flex flex-col gap-4">
        {navbarItems.map(({ key, label, link }) => (
          <NavBarItem key={key} link={link} label={label} />
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
