import React from "react";
import { DefaultInputs } from "../../../types/dummy_frontend/dummy_constants";

interface HeadingProps {
  headingText: string;
}

function Heading({
  headingText = DefaultInputs.DEFAULT_HEADING_TEXT,
}: HeadingProps) {
  return (
    <>
      <h2 className="text-4xl font-bold leading-tight text-black sm:text-4xl mb-0">
        {headingText}
      </h2>
      <hr className="h-px w-full bg-black border-none mt-0" />
    </>
  );
}

export default Heading;