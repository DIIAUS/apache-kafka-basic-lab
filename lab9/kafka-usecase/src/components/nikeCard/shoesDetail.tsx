import React from "react";
import styled from "styled-components";
import NikeLogoImg from "../../../public/nike-card-asset/images/nike-logo.png";
import { Marginer } from "./marginer";

const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5em 6px 0 6px;
  line-height: 1.4;
`;

const MediumText = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
`;

const SmallText = styled.span`
  font-size: 12px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  text-align: left;
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BuyButton = styled.button`
  padding: 10px 16px;
  background-color: #fbbe01;
  color: #000;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  border: 3px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;
  &:hover {
    background-color: transparent;
    color: #fff;
    border: 3px solid #fbbe01;
  }
`;

const NikeLogo = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: auto;
    height: 13px;
  }
`;

export const ShoesDetails = (props: any) => {
  return (
    <DetailsContainer>
      <SmallText>Nike</SmallText>
      <SpacedHorizontalContainer>
        <MediumText>Air Jordan</MediumText>
        <MediumText>$550</MediumText>
      </SpacedHorizontalContainer>
      <Marginer direction="vertical" margin="1.2em" />
      <SpacedHorizontalContainer>
        <MediumText>Your Next shoes</MediumText>
        <BuyButton>buy</BuyButton>
      </SpacedHorizontalContainer>
      <NikeLogo>
        <img src={NikeLogoImg.src} alt="Nike Logo" />
      </NikeLogo>
    </DetailsContainer>
  );
};
