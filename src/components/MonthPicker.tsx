import React from "react";

interface PickerProps {
  labelText: string;
}

export const MonthPicker: React.FC<PickerProps> = ({ labelText }) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor="spendValue"
        className="block text-sm font-semibold text-gray-700"
      >
        {labelText}
      </label>

      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500 z-10"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="date"
          className="relative w-56 bg-white border border-gray-300 rounded-md shadow-sm pl-9 pr-4 py-3 text-left cursor-default font-semibold focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Select date"
        />
      </div>
    </div>
  );
};
