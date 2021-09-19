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
  padding: ${(props) => `${props.theme.sizing.two} ${props.theme.sizing.four}`};
  border-radius: ${(props) => props.theme.sizing.two};
  background: ${(props) => props.theme.colors.layout.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
`;

export default MainContainer;
