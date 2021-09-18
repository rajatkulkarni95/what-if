import styled from "styled-components";
import { font } from "../theme/theme";

interface InputProps {
  margin?: number;
  width?: number;
}

const Input = styled.input<InputProps>`
  border: 2px solid;
  border-color: transparent;
  border-radius: ${({ theme }) => theme.sizing.one};
  box-shadow: ${(props) =>
    `${props.theme.colors.layout.boxShadowInput} ${props.theme.sizing.boxShadow}`};
  margin: ${(props) => props.margin}px;
  width: ${(props) => (props.width ? `${props.width}px` : "220px")};
  padding: ${(props) =>
    `${props.theme.sizing.three} ${props.theme.sizing.four}`};
  font-weight: ${font.weights.semiBold};
  font-size: ${font.sizes.md};
  background: ${(props) => props.theme.colors.layout.foreground};
  color: ${(props) => props.theme.colors.text.default};
  outline: none;
  letter-spacing: 0.5px;

  :focus {
    border: 2px solid ${(props) => props.theme.colors.layout.border};
  }
`;

export default Input;
