import React, { useRef, useState } from "react";
import { Button } from "../components/Button";
import NumberedInput from "../components/NumberedInput";
import Select from "../components/Select";
import { entities } from "../constants/entities";

const Form: React.FC = () => {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const handleShowingOptions = () => {
    setShowOptions(true);
  };

  const closeOptionsMenu = () => {
    setShowOptions(false);
  };

  // To detect outside clicks and close the menu
  const selectRef = useRef<HTMLUListElement>(null);

  return (
    <form className="bg-gray-200 p-8 rounded-lg w-3/5 mx-auto my-5 h-auto flex flex-col items-center">
      <section className="flex items-center">
        <NumberedInput
          labelText="How much did you spend"
          value={2000}
          onValueChange={(e) => {}}
        />
        <Select
          labelText="Instead, could’ve bought"
          showOptions={showOptions}
          handleShowingOptions={handleShowingOptions}
          closeOptionsMenu={closeOptionsMenu}
          optionsList={entities}
          selectRef={selectRef}
        />
      </section>
      <Button
        label="Calculate"
        type="button"
        onClick={() => console.log("hello")}
      />
    </form>
  );
};

export default Form;
