import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  z-index: 1;
  position: absolute;
  overflow: scroll;
  max-width: 100%;
  padding: 20px 0;
  width: 100%;
`;

export const Moves = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  z-index: 1;
  width: 125px;
  height: 100%;
  margin-top: 250px;
  position: absolute;
  overflow: scroll;
  max-width: 100%;
  padding: 20px 0;
  width: 100%;
`;

export const BackgroundWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow-y: none;
`;

export const FloatingActionsWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
  bottom: 80px;
  z-index: 100;
`;

export const FloatingButton = styled.div`
  margin-right: 16px;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const CustomCardWrapper = styled.div`
  width: 125px;
  position: relative;
  margin: 0 16px;
`;

export const CustomCard = styled.div`
  zindex: 11;
  width: 100%;
`;