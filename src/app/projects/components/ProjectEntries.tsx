import ProjectEntry from "./ProjectEntry";

export default function ProjectEntries() {
  return (
    <>
      <ProjectEntry
        name="millio one"
        date="July 2023"
        description="A journalling app"
        url="millio.one"
        technology={["Express", "React", "Sequelize", "Redux"]}
      />
      <ProjectEntry
        name="goaly"
        date="June 2023"
        description="A goal sharing and supporting platform"
        url="goaly.lol"
        technology={["React", "SQLAlchemy", "Python", "Flask", "Redux"]}
      />
      <ProjectEntry
        name="YCHSHIP"
        date="May 2023"
        description="An air bnb clone"
        url="ychsip"
        technology={["Express", "React", "Sequelize", "Redux"]}
      />
      <ProjectEntry
        name="musy"
        date="2022"
        description="Music sharing platform"
        url="musy.one"
        technology={["Remix", "React", "Zustand"]}
      />
      <ProjectEntry
        name="VScode Themes"
        date="2023"
        description="A collection of vscode themes I made"
        url="vscodethemesurl"
      />
    </>
  );
}
