import styled, { css } from "styled-components";
import { font } from "../theme/theme";

interface InputProps {
  type: string;
}

interface ContainerProps {
  margin?: number;
  width?: number;
}

export const Input = styled.input<InputProps>`
  border: none;
  font-weight: ${font.weights.regular};
  font-size: ${font.sizes.md};
  background: none;
  color: ${(props) => props.theme.colors.text.default};
  outline: none;
  letter-spacing: 0.5px;
  font-family: ${font.face};
  margin: 0 ${(props) => props.theme.sizing.three};
  width: 200px;

  // remove the number increment/decrement buttons
  ${(props) =>
    props.type === "number" &&
    css`
      :-webkit-outer-spin-button,
      :-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      -moz-appearance: textfield;
    `}
`;

export const InputContainer = styled.div<ContainerProps>`
  border: 2px solid;
  border-color: transparent;
  background: ${(props) => props.theme.colors.layout.foreground};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin}px;
  width: ${(props) => (props.width ? `${props.width}px` : "275px")};
  padding: ${(props) => props.theme.sizing.three};
  border-radius: ${({ theme }) => theme.sizing.one};
  box-shadow: ${(props) =>
    `${props.theme.colors.layout.boxShadowInput} ${props.theme.sizing.boxShadow}`};

  :focus-within {
    border: 2px solid ${(props) => props.theme.colors.layout.border};
  }
`;
