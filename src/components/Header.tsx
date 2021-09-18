import React from "react";
import styled from "styled-components";
import LogoImage from "../assets/LogoWhite.png";
import Image from "next/image";
import { SecondaryButton } from "./Button";

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Image src={LogoImage} alt="what-if-logo" width={240} height={80} />
      <div>
        <SecondaryButton margin={8} fontSize={14}>
          Why?
        </SecondaryButton>
        <SecondaryButton margin={8} fontSize={14}>
          Github
        </SecondaryButton>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;

const Logo = styled(Image)``;

export default Header;
