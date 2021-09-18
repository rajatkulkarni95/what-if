import React from "react";
import styled from "styled-components";
import FormContainer from "./FormContainer";

const MainContainer: React.FC = () => {
  return (
    <Container>
      <FormContainer />
    </Container>
  );
};

const Container = styled.section`
  padding: ${(props) => props.theme.sizing.six};
  border-radius: ${(props) => props.theme.sizing.two};
  background: ${(props) => props.theme.colors.layout.background};
  display: flex;
  flex-direction: column;
  box-shadow: ${(props) =>
    `${props.theme.colors.layout.boxShadowBtn} ${props.theme.sizing.boxShadow}`};
`;

export default MainContainer;
