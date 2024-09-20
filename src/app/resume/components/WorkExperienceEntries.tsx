import ResumeEntry from "./ResumeEntry";

export default function WorkExperienceEntries() {
  return (
    <>
      <ResumeEntry
        dateRange="May 2023 - Sept 2023"
        organization="Synthesis"
        title="Content Developer"
        description={[
          "Created and delivered 30+ interactive digital tutor lessons to enhance student engagement and comprehension.",
          "Collaborated on a team of content experts, and designers to implement various types of learning activities, quizzes, simulations, games, and more.",
        ]}
        technologies={[
          "Next.js",
          "React",
          "Typescript",
          "Pixi.js",
          "Tailwind",
          "Figma",
          "Framer Motion",
        ]}
      />
      <ResumeEntry
        dateRange="2020 - 2021"
        organization="LOUD"
        title="Full Stack Developer"
        description={[
          "Created and delivered 30+ interactive digital tutor lessons to enhance student engagement and comprehension.",
          "Collaborated on a team of content experts, and designers to implement various types of learning activities, quizzes, simulations, games, and more.",
        ]}
        technologies={[
          "Next.js",
          "React",
          "Typescript",
          "Pixi.js",
          "Tailwind",
          "Figma",
          "Framer Motion",
        ]}
      />
    </>
  );
}
