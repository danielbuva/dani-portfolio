import Link from "next/link";
import Email from "./components/Email";
import Phone from "./components/Phone";

export default function Info() {
  return (
    <div className="inline-flex flex-col gap-2 text-sm">
      <Link
        id="link"
        href="https://www.linkedin.com/in/daniel-valdecantos-14792a210/"
        target="_blank"
        className="inline-flex w-[84px] items-center"
      >
        LinkedIn ↗
      </Link>

      <Link
        id="link"
        href="https://github.com/danielbuva"
        target="_blank"
        className="inline-flex w-[70px] items-center"
      >
        GitHub ↗
      </Link>
      <Email />
      <Phone />
      <Link id="link" href="/daniresume.pdf" target="_blank" prefetch>
        Resume PDF ↗
      </Link>
    </div>
  );
}
