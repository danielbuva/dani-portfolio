import EducationEntries from "./components/EducationEntries";
import WorkExperienceEntries from "./components/WorkExperienceEntries";

export default function Resume() {
  return (
    <div>
      <div className="pb-4 text-xl font-bold">Work Experience</div>
      <WorkExperienceEntries />
      <div className="py-4 text-xl font-bold">Education</div>
      <EducationEntries />
    </div>
  );
}
