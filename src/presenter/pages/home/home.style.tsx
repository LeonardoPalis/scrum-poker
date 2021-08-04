import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: absolute;
`;

export const HomeBackground = styled.img`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: -1;
`;

export const Content = styled.div`
  z-index: 1;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  padding: 30px 60px;
  background: #35a2ff;
  border-radius: 8px;
  color: #252525;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin: 0;
`;
export const Subtitle = styled.p`
  margin: 0;
  margin-bottom: 30px;
  color: #fdfdfd;
`;
