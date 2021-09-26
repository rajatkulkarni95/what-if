import React from "react";

interface InputProps {
  labelText: string;
  value: number;
  onValueChange: React.ChangeEventHandler<HTMLInputElement> &
    ((event: {
      target: {
        value: number;
      };
    }) => any);
}

const NumberedInput: React.FC<InputProps> = ({
  labelText,
  value,
  onValueChange,
}) => {
  return (
    <div className="flex flex-col mr-4">
      <label
        htmlFor="spendValue"
        className="block text-sm font-semibold text-gray-700"
      >
        {labelText}
      </label>

      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 font-bold sm:text-md">$</span>
        </div>
        <input
          type="number"
          name="spendValue"
          id="spendValue"
          className="focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-7 pr-4 py-3 sm:text-sm border-gray-300 rounded-md"
          value={value}
          onChange={onValueChange}
          min={1}
          max={1000000}
        />
      </div>
    </div>
  );
};

export default NumberedInput;
