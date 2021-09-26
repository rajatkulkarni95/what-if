import React, { SyntheticEvent, useCallback, useRef, useState } from "react";
import { Button } from "../components/Button";
import { MinimalResult } from "../components/MinimalResult";
import NumberedInput from "../components/NumberedInput";
import Select from "../components/Select";
import { entities } from "../constants/entities";
import { useOnClickOutside } from "../hooks/useOutsideClick";
import { useRequest } from "../hooks/useRequest";
import { FormObject } from "../types/form";

interface FormProps {
  showResults: Function;
  formOptions: FormObject;
  handleFormChange: Function;
}

const Form: React.FC<FormProps> = ({
  showResults,
  formOptions,
  handleFormChange,
}) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const handleShowingOptions = () => {
    setShowOptions(true);
  };

  const closeOptionsMenu = () => {
    setShowOptions(false);
  };

  // To detect outside clicks and close the menu
  const selectRef = useRef<HTMLUListElement>(null);

  useOnClickOutside(
    selectRef,
    useCallback(() => {
      setShowOptions(false);
    }, [])
  );

  const handleNumberChange = (e: EventTarget) => {
    const { value } = e.target;

    handleFormChange({ spentValue: value });
  };

  const handleOptionClick = (e: SyntheticEvent) => {
    const { textContent } = e.target as HTMLLIElement;
    const clickedOption = entities.find(
      (entity) => entity.label === textContent
    );

    // To clear the issue of an undefined value being passed to useState
    // FIXME: Figure out how to ensure via types that the end result on Array.find in this case is a sure value rather than
    // undefined
    if (clickedOption) handleFormChange({ spentOn: clickedOption });
    closeOptionsMenu();
  };

  const onClickCalculate = () => {
    showResults();
  };

  return (
    <form className="bg-gray-200 p-8 rounded-lg w-3/5 mx-auto my-5 h-auto flex flex-col items-center">
      <section className="flex items-center">
        <NumberedInput
          labelText="How much did you spend"
          value={formOptions.spentValue}
          onValueChange={handleNumberChange}
        />
        <Select
          labelText="Instead, could’ve bought"
          showOptions={showOptions}
          handleShowingOptions={handleShowingOptions}
          handleOptionClick={handleOptionClick}
          optionsList={entities}
          selectRef={selectRef}
          selectedOption={formOptions.spentOn}
        />
      </section>
      <Button label="Calculate" type="button" onClick={onClickCalculate} />
    </form>
  );
};

export default Form;
