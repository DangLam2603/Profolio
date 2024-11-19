"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize hover:text-accent font-medium transition-all`}
            key={index}
          >
            {link.name.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
