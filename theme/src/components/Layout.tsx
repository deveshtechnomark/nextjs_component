"use client";
import Nav from "@/components/Nav";
import { useState } from "react";

export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="bg-bgGray min-h-screen w-screen">
      <div className="flex">
        <Nav show={showNav} />
        <div className="flex-grow p-4 w-[80%]">{children}</div>
      </div>
    </div>
  );
}
