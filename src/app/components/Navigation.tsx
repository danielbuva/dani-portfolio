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
            className="h-8 px-3"
          >
            Home
          </Link>
          <Link
            id={pathname === "/projects" ? "active" : "nav"}
            href="/projects"
            className="h-8 px-3 hover:text-[#c7dde3]"
          >
            Projects
          </Link>
          <Link
            id={pathname === "/resume" ? "active" : "nav"}
            href="/resume"
            className="h-8 px-3"
          >
            Resume
          </Link>
        </div>
        <ThemeToggler />
      </div>
      <div className="flex w-[598px] flex-grow flex-col gap-8 rounded-3xl border p-8">
        {children}
      </div>
      <div className="container flex h-10 items-center justify-center gap-2 text-sm text-[#c7dde375]">
        <Link
          id="nav"
          href="https://www.linkedin.com/in/daniel-valdecantos-14792a210/"
          target="_blank"
          className="h-8 px-3"
        >
          LinkedIn
        </Link>
        <Link
          id="nav"
          href="https://github.com/danielbuva"
          target="_blank"
          className="h-8 px-3"
        >
          GitHub
        </Link>
        <Link
          id={pathname === "/contact" ? "active" : "nav"}
          href="/contact"
          className="h-8 px-3"
        >
          Contact
        </Link>
      </div>
    </>
  );
}
