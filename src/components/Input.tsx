import styled, { css } from "styled-components";
import { font } from "../theme/theme";

interface InputProps {
  type: string;
}

export const NumberedInput = styled.input<InputProps>`
  border: none;
  font-weight: ${font.weights.regular};
  font-size: ${font.sizes.md};
  background: none;
  color: ${(props) => props.theme.colors.text.default};
  outline: none;
  letter-spacing: 0.5px;
  font-family: ${font.face};
  margin: 0 ${(props) => props.theme.sizing.three};
  width: 150px;

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
