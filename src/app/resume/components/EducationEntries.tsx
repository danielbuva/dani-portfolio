import ResumeEntry from "./ResumeEntry";

export default function EducationEntries() {
  return (
    <>
      <ResumeEntry
        dateRange="2023 - present"
        organization="University of Nevada, Las Vegas"
        title="Computer Science"
        description={[
          "Currently completing a Bachelor of Science (B.S.) in Computer Science",
        ]}
      />
      <ResumeEntry
        dateRange="2023"
        organization="App Academy"
        title="Full-stack Engineering Bootcamp"
        description={["Certificate of Completion"]}
      />
    </>
  );
}
