import EducationEntries from "./components/EducationEntries";
import WorkExperienceEntries from "./components/WorkExperienceEntries";

export default function Resume() {
  return (
    <div>
      <div className="pb-4">Work Experience</div>
      <WorkExperienceEntries />
      <div className="py-4">Education</div>
      <EducationEntries />
    </div>
  );
}
