import React, { MouseEventHandler, ReactNode } from "react";

interface OptionProps {
  icon: ReactNode;
  optionText: string;
  onClickOption: MouseEventHandler<HTMLLIElement>;
}

export const Option: React.FC<OptionProps> = ({
  icon,
  optionText,
  onClickOption,
}) => {
  return (
    <li
      className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-gray-100"
      id="listbox-option-0"
      role="option"
      onClick={onClickOption}
    >
      <div className="flex items-center">
        {icon}
        <span className="font-normal ml-3 block truncate">{optionText}</span>
      </div>
    </li>
  );
};
