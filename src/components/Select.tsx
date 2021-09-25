import { MouseEventHandler } from "react";
import { SelectedOption } from "./SelectedOption";
import { FaEthereum as EthereumIcon } from "react-icons/fa";
import { Option } from "./Option";
import { entity } from "../types/entity";

interface SelectProps {
  showOptions: boolean;
  optionsList: entity[];
  labelText: string;
  handleShowingOptions: MouseEventHandler<HTMLButtonElement>;
}

const Select: React.FC<SelectProps> = ({
  showOptions,
  optionsList,
  labelText,
  handleShowingOptions,
}) => {
  const handleOptionClick = (e) => {
    console.log(e.target);
  };

  return (
    <div>
      <label
        id="listbox-label"
        className="block text-sm font-semibold text-gray-700"
      >
        {labelText}
      </label>
      <div className="mt-1 relative">
        <button
          type="button"
          className="relative w-56 bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-3 text-left cursor-default font-semibold focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
          onClick={handleShowingOptions}
        >
          <SelectedOption optionText="Ethereum" icon={<EthereumIcon />} />
        </button>

        {showOptions && (
          <ul
            className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            //   tabindex="-1"
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-option-3"
          >
            {optionsList?.map((option) => (
              <Option
                icon={option.icon}
                optionText={option.label}
                onClickOption={handleOptionClick}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Select;
