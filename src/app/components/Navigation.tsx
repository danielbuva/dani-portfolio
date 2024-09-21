"use client";

import Link from "next/link";
import ThemeToggler from "./ThemeToggler";
import { type ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function Navigation({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <>
      <div className="container relative flex h-10 w-[600px] justify-center py-8 text-sm text-[#c7dde375]">
        <div>
          <Link
            id={pathname === "/" ? "active" : "nav"}
            href="/"
            className="px-3"
          >
            Home
          </Link>
          <Link
            id={pathname === "/projects" ? "active" : "nav"}
            href="/projects"
            className="px-3 hover:text-[#c7dde3]"
          >
            Projects
          </Link>
          <Link
            id={pathname === "/resume" ? "active" : "nav"}
            href="/resume"
            className="px-3"
          >
            Resume
          </Link>
          <Link
            id={pathname === "/info" ? "active" : "nav"}
            href="/info"
            className="px-3"
          >
            Info
          </Link>
        </div>
        <ThemeToggler />
      </div>
      <div className="flex w-[598px] flex-grow flex-col gap-8 overflow-scroll border-l border-r border-t border-[#2f3336] p-8">
        {children}
      </div>
    </>
  );
}
