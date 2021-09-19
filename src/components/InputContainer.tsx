import styled from "styled-components";

interface ContainerProps {
  marginY?: number;
  marginX?: number;
  width?: number;
}

export const InputContainer = styled.div<ContainerProps>`
  border: 2px solid;
  border-color: transparent;
  background: ${(props) => props.theme.colors.layout.foreground};
  display: flex;
  align-items: center;
  margin-top: ${(props) => props.marginY}px;
  margin-bottom: ${(props) => props.marginY}px;
  width: ${(props) => (props.width ? `${props.width}px` : "220px")};
  padding: ${(props) => props.theme.sizing.three};
  border-radius: ${({ theme }) => theme.sizing.one};

  :focus-within {
    border: 2px solid ${(props) => props.theme.colors.layout.border};
    box-shadow: ${(props) =>
      `${props.theme.colors.layout.boxShadowInput} ${props.theme.sizing.boxShadow}`};
  }
`;
