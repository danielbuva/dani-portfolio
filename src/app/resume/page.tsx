import Link from "next/link";
import EducationEntries from "./components/EducationEntries";
import WorkExperienceEntries from "./components/WorkExperienceEntries";

export default function Resume() {
  return (
    <div>
      <div className="flex items-center justify-between pb-4">
        <p className="text-xl font-bold">Work Experience</p>
        <Link
          className="text-sm"
          id="link"
          href="/daniresume.pdf"
          target="_blank"
          prefetch
        >
          PDF ↗
        </Link>
      </div>
      <WorkExperienceEntries />
      <div className="py-4 text-xl font-bold">Education</div>
      <EducationEntries />
    </div>
  );
}
