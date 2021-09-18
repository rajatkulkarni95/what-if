import styled from "styled-components";
import { font } from "../theme/theme";

interface ButtonProps {
  margin?: number;
  fontSize?: number;
  width?: number;
}

const Button = styled.button<ButtonProps>`
  border-radius: ${({ theme }) => theme.sizing.one};
  padding: ${(props) =>
    `${props.theme.sizing.three} ${props.theme.sizing.four}`};
  background-color: ${({ theme }) => theme.colors.text.active};
  color: ${({ theme }) => theme.colors.text.default};
  margin: ${(props) => props.margin}px;
  font-family: ${font.face};
  font-size: ${(props) =>
    props.fontSize ? `${props.fontSize}px` : font.sizes.md};
  font-weight: ${font.weights.semiBold};
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.layout.border};
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  cursor: pointer;
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};

  :hover {
    filter: brightness(90%);
  }
`;

export default Button;
