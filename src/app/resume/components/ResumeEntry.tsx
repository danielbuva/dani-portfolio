import CircleSVG from "~/app/components/svg/CircleSVG";

type ResumeEntry = {
  dateRange: string;
  organization: string;
  title: string;
  description: string[];
  technologies?: string[];
};

export default function ResumeEntry({
  dateRange,
  organization,
  title,
  description,
  technologies,
}: ResumeEntry) {
  return (
    <div className="flex w-full flex-col gap-2 border-l p-4">
      <div className="relative min-w-[160px] pt-[2px] text-sm">
        <CircleSVG />
        <p className="font-bold">{dateRange}</p>
        <p id="sub">{organization}</p>
      </div>
      <div>
        <p className="text-base font-bold">{title}</p>

        {description.map((point, i) => (
          <div className="flex pl-8" key={i}>
            • <p className="pl-2">{point}</p>
          </div>
        ))}

        {technologies && (
          <div id="sub" className="flex flex-wrap text-sm">
            {technologies.map((entry, i) => (
              <p key={entry}>
                {entry}
                {i !== technologies.length - 1 ? "," : ""}&nbsp;
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
