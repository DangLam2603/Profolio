"use client";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Project",
    path: "/project",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Work",
    path: "/work",
  },

  {
    name: "Blog",
    path: "/blog",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Trigger to open the sheet */}
      <SheetTrigger asChild>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center justify-center"
        >
          <CiMenuFries className="text-[32px] text-accent" />
        </button>
      </SheetTrigger>

      {/* Sheet Content */}
      <SheetContent className="p-8">
        <SheetTitle className="text-xl font-semibold mb-2">
          Navigation
        </SheetTitle>
        <nav>
          <ul className="flex flex-col gap-5 my-8">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`block text-lg ${
                    pathname === link.path
                      ? "text-accent font-bold"
                      : "text-gray-700"
                  } hover:text-accent transition-all`}
                  onClick={handleClose} // Close the nav when a link is clicked
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
