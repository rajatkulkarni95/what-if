import React, { useState } from "react";
import styled from "styled-components";
import { font } from "../theme/theme";

interface SelectProps {
  items: Item[];
  onChange(event: { target: { value: string } }): void;
}

type Item = {
  id: number;
  icon: JSX.Element;
  label: string;
};

const Select: React.FC<SelectProps> = ({ onChange, items }) => {
  const [showOptions, setShowOptions] = useState<Boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("AAPL");
  return (
    <Wrapper>
      <StyledSelect onClick={() => setShowOptions(true)}>
        {selectedOption}
      </StyledSelect>
      {showOptions && (
        <OptionsList>
          {items.map((item) => (
            <Option
              key={item.id}
              onClick={(e) => {
                setSelectedOption(e.target.textContent);
                setShowOptions(false);
              }}
            >
              {item.label}
            </Option>
          ))}
        </OptionsList>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSelect = styled.button`
  border: 2px solid;
  border-color: transparent;
  background: ${(props) => props.theme.colors.layout.foreground};
  display: flex;
  align-items: center;
  font-weight: ${font.weights.regular};
  font-size: ${font.sizes.md};
  color: ${(props) => props.theme.colors.text.default};
  font-family: ${font.face};
  margin-top: 8px;
  margin-bottom: 4px;
  width: 200px;
  padding: ${(props) => props.theme.sizing.three};
  border-radius: ${({ theme }) => theme.sizing.one};

  :focus-within {
    border: 2px solid ${(props) => props.theme.colors.layout.border};
  }
`;

const OptionsList = styled.ul`
  margin-top: 8px;
  width: 200px;
  padding: 0;
  position: absolute;
  bottom: 32px;
  z-index: 2;
`;

const Option = styled.li`
  border: 2px solid;
  border-color: transparent;
  background: ${(props) => props.theme.colors.layout.foreground};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: ${(props) => props.theme.sizing.three};
  border-radius: ${({ theme }) => theme.sizing.one};
  cursor: pointer;

  :hover {
    background: ${(props) => props.theme.colors.layout.accent};
  }
`;

export default Select;
