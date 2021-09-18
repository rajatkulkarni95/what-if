import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "../components/Input";

import { AiFillDollarCircle as DollarSign } from "react-icons/ai";
import { Label } from "../components/Label";
import { InputContainer } from "../components/InputContainer";

const FormContainer: React.FC = () => {
  const [number, setNumber] = useState<number>(25000);
  const handleNumberChange = (event: { target: { value: number } }) => {
    const { value } = event.target;
    setNumber(value);
  };
  return (
    <FlexColumn>
      <InputWrapper>
        <Label>How much did you spend?</Label>
        <InputContainer marginY={8}>
          <DollarSign fontSize="24px" />
          <Input
            type="number"
            value={number}
            onChange={handleNumberChange}
            min={1}
            max={1000000}
          />
        </InputContainer>
      </InputWrapper>
    </FlexColumn>
  );
};

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  margin: 24px;
`;

export default FormContainer;
