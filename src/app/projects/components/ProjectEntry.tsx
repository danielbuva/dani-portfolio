"use client";

import { useState } from "react";

type Entry = {
  name: string;
  date: string;
  description: string;
  url: string;
  technology?: string[];
};

export default function ProjectEntry({
  name,
  date,
  description,
  url,
  technology,
}: Entry) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        id="link"
        className="flex cursor-pointer justify-between"
        onClick={() => setShow(!show)}
      >
        <p>{name}</p>
        <p>{date}</p>
      </div>
      {show && (
        <div>
          <p>{url}</p>
          <p>{description}</p>
          <div className="flex">
            {technology?.map((t, i) => (
              <p key={t}>
                {t}
                {i !== technology.length - 1 && ","}
                &nbsp;
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
