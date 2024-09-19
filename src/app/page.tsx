import Link from "next/link";
import ThemeToggler from "./components/ThemeToggler";

export default function HomePage() {
  return (
    <main className="bg-gradient flex min-h-screen flex-col items-center">
      <div className="container relative flex h-10 w-[600px] justify-center py-8 text-sm text-[#c7dde375]">
        <div>
          <Link id="nav" href="/" className="h-8 px-3">
            Home
          </Link>
          <Link
            id="nav"
            href="/projects"
            className="h-8 px-3 hover:text-[#c7dde3]"
          >
            Projects
          </Link>
          <Link id="nav" href="/resume" className="h-8 px-3">
            Resume
          </Link>
        </div>
        <ThemeToggler />
      </div>
      <div className="flex w-[598px] flex-grow flex-col gap-8 rounded-3xl border p-8">
        <div className="flex h-80 w-full items-center justify-center border">
          placeholder for dani portrait
        </div>
        <p>
          I&apos;m a full-stack software engineer with a proven track record of
          creating interactive and engaging experiences in the eSports,
          education, and lifestyle industries. My work primarily utilizes
          Next.js, React, and TypeScript, demonstrating my proficiency in these
          technologies. I&apos;m drawn to software engineering because it offers
          a dynamic environment where I can optimize products for efficiency and
          design with the user in mind.
          <br />
          <br />
          As I work toward completing my Bachelor of Science degree in Computer
          Science, I&apos;m applying the advanced concepts and technical skills
          I&apos;m learning to real-world projects. This academic journey
          enhances my problem-solving abilities and deepens my understanding of
          core principles.
          <br />
          <br />
          In my journey of learning various languages and frameworks, I
          discovered my determination to overcome challenges. I appreciate how
          creativity and problem-solving intertwine in this field. Committed to
          continuous improvement, I am excited about my upcoming projects. I
          invite you to explore my current work in the Projects tab and see how
          I bring my ideas to life!
        </p>
      </div>
      <div className="container flex h-10 items-center justify-center gap-2 text-sm text-[#c7dde375]">
        <Link id="nav" href="/resume" className="h-8 px-3">
          Resume
        </Link>
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
        <Link id="nav" href="/contact" className="h-8 px-3">
          Contact
        </Link>
      </div>
    </main>
  );
}
