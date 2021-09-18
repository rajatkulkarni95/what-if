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
  margin: ${(props) => props.margin}px;
  font-family: ${font.face};
  font-size: ${(props) =>
    props.fontSize ? `${props.fontSize}px` : font.sizes.md};
  font-weight: ${font.weights.semiBold};
  outline: none;
  border: 2px solid ${({ theme }) => theme.colors.layout.border};

  cursor: pointer;
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
`;

export const PrimaryButton = styled(Button)<ButtonProps>`
  background-color: ${({ theme }) => theme.colors.text.active};
  color: ${({ theme }) => theme.colors.text.default};
  box-shadow: ${(props) =>
    `${props.theme.colors.layout.boxShadowBtn} ${props.theme.sizing.boxShadow}`};
  :hover {
    filter: brightness(90%);
  }
`;

export const SecondaryButton = styled(Button)<ButtonProps>`
  background-color: transparent;
  border: 1px solid;
  border-color: transparent;
  color: ${({ theme }) => theme.colors.text.secondary};

  :hover {
    border: 1px solid ${({ theme }) => theme.colors.layout.border};
    box-shadow: ${(props) =>
      `${props.theme.colors.layout.boxShadowBtn} ${props.theme.sizing.boxShadow}`};
  }
`;
