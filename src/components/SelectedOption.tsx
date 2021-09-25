import React, { ReactNode } from "react";
import { entity } from "../types/entity";

interface SelectedOptionProps {
  selectedOption: entity;
}

export const SelectedOption: React.FC<SelectedOptionProps> = ({
  selectedOption,
}) => {
  const { icon, label } = selectedOption;
  return (
    <React.Fragment>
      <span className="flex items-center">
        {icon}
        <span className="ml-3 block truncate">{label}</span>
      </span>
      <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <svg
          className="h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </React.Fragment>
  );
};
