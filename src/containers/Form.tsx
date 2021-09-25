import React from "react";
import NumberedInput from "../components/NumberedInput";

const Form: React.FC = () => {
  return (
    <form className="bg-gray-200 p-8 rounded-lg w-5/12 mx-auto my-5 h-auto flex">
      <section>
        <NumberedInput
          labelText="How much did you spend"
          value={2000}
          onValueChange={(e) => console.log(e.target.value)}
        />
      </section>
    </form>
  );
};

export default Form;
