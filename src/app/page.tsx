import Link from "next/link";
import ThemeToggler from "./components/ThemeToggler";

export default function HomePage() {
  return (
    <main className="bg-gradient flex min-h-screen flex-col items-center border border-red-500">
      <div className="container relative flex h-10 w-[600px] justify-center py-8 text-sm text-[#c7dde375]">
        <div>
          <Link id="nav" href="/" className="h-8 px-3 hover:text-[#c7dde3]">
            Home
          </Link>
          <Link
            id="nav"
            href="/projects"
            className="h-8 px-3 hover:text-[#c7dde3]"
          >
            Projects
          </Link>
          <Link
            id="nav"
            href="/resume"
            className="h-8 px-3 hover:text-[#c7dde3]"
          >
            Resume
          </Link>
        </div>
        <ThemeToggler />
      </div>
      <div className="w-[598px] flex-grow rounded-3xl border">hi</div>
      <div className="container flex h-10 items-center justify-center gap-2 text-sm text-[#c7dde375]">
        <Link id="nav" href="/resume" className="h-8 px-3 hover:text-[#c7dde3]">
          Resume
        </Link>
        <Link
          id="nav"
          href="/notebooks"
          className="h-8 px-3 hover:text-[#c7dde3]"
        >
          LinkedIn
        </Link>
        <Link
          id="nav"
          href="/notebooks"
          className="h-8 px-3 hover:text-[#c7dde3]"
        >
          GitHub
        </Link>
        <Link
          id="nav"
          href="/contact"
          className="h-8 px-3 hover:text-[#c7dde3]"
        >
          Contact
        </Link>
      </div>
    </main>
  );
}
