import React, { useState } from "react";
import styled from "styled-components";
import { NumberedInput } from "../components/Input";

import { AiFillDollarCircle as DollarSign, AiFillCar } from "react-icons/ai";
import { Label } from "../components/Label";
import { InputContainer } from "../components/InputContainer";
import Select from "../components/Select";
import { PrimaryButton } from "../components/Button";

const FormContainer: React.FC = () => {
  const [number, setNumber] = useState<number>(25000);
  const [stock, setStock] = useState<string>("AAPL");
  const handleNumberChange = (event: { target: { value: number } }) => {
    const { value } = event.target;
    setNumber(value);
  };

  const handleSelectChange = (event: { target: { value: string } }) => {
    const { value } = event.target;
    setStock(value);
  };

  const items = [
    { id: 1, icon: <AiFillCar />, label: "BTC" },
    { id: 2, icon: <AiFillCar />, label: "AAPL" },
    { id: 3, icon: <AiFillCar />, label: "ETH" },
    { id: 4, icon: <AiFillCar />, label: "TSLA" },
  ];

  return <Wrapper></Wrapper>;
};

const Wrapper = styled.div`
  border: none;
  border-radius: 4px;
  width: 100%;
  background: #ffffff;
  padding: 8px 16px;
  height: 96px;
`;

export default FormContainer;
