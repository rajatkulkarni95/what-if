import React, { useState } from "react";
import NumberedInput from "../components/NumberedInput";
import Select from "../components/Select";
import { entities } from "../constants/entities";

const Form: React.FC = () => {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const handleShowingOptions = () => {
    setShowOptions(true);
  };

  return (
    <form className="bg-gray-200 p-8 rounded-lg w-5/12 mx-auto my-5 h-auto flex">
      <NumberedInput
        labelText="How much did you spend"
        value={2000}
        onValueChange={(e) => console.log(e.target.value)}
      />
      <Select
        labelText="Instead, could’ve bought"
        showOptions={showOptions}
        handleShowingOptions={handleShowingOptions}
        optionsList={entities}
      />
    </form>
  );
};

export default Form;
