"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Nav = () => {
  const router = usePathname();

  return (
    <nav className="nav">
      <Link
        href={"/"}
        className={router === "/" ? "activeLink" : "inactiveLink"}
      >
        Dashboard
      </Link>
      <Link
        href={"/toast"}
        className={router === "/toast" ? "activeLink" : "inactiveLink"}
      >
        Toast
      </Link>
      <Link
        href={"/datatable"}
        className={router === "/datatable" ? "activeLink" : "inactiveLink"}
      >
        DataTable
      </Link>
      <Link
        href={"/form-element"}
        className={router === "/form-element" ? "activeLink" : "inactiveLink"}
      >
        Form-Element
      </Link>
    </nav>
  );
};

export default Nav;
