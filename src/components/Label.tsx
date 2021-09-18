import styled from "styled-components";
import { font } from "../theme/theme";

export const Label = styled.label`
  font-size: ${font.sizes.xs};
  color: ${(props) => props.theme.colors.text.highlight};
`;
