"use client";

import { useState } from "react";
import CheckSVG from "~/app/components/svg/CheckSVG";
import CopySVG from "~/app/components/svg/CopySVG";

export default function Phone() {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("8188187357");
      setCopySuccess(true);
      setTimeout(() => {
        setCopySuccess(false);
      }, 2000);
    } catch (err) {
      console.error(err);
      setCopySuccess(false);
    }
  };

  return (
    <div
      id="link"
      className="flex w-[60px] cursor-pointer items-center justify-between"
      onClick={copyToClipboard}
    >
      {copySuccess ? (
        <>
          <p>Copied</p>
          <CheckSVG />
        </>
      ) : (
        <>
          <p>Phone</p>
          <CopySVG />
        </>
      )}
    </div>
  );
}
