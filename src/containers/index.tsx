import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../components/Button";
import FormContainer from "./FormContainer";

const MainContainer: React.FC = () => {
  return (
    <Container>
      <FormContainer />
      <PrimaryButton width={220}>Calculate</PrimaryButton>
    </Container>
  );
};

const Container = styled.section`
  padding: ${(props) => props.theme.sizing.six};
  border-radius: ${(props) => props.theme.sizing.two};
  background: ${(props) => props.theme.colors.layout.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${(props) =>
    `${props.theme.colors.layout.boxShadowBtn} ${props.theme.sizing.boxShadow}`};
  width: auto;
`;

export default MainContainer;
