import styled from "styled-components";
import { Col } from "react-bootstrap";

export const StyledCol = styled(Col)`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const Card = styled.div`
  position: relative;
  transition: all 0.5s ease-in;
  cursor: pointer;
  height: 375px;
`;

export const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  visibility: none;
  transition: 0.5s ease;
  background-color: #393839;
  
  ${Card}:hover & {
    opacity: 0.8;
  }
`;

export const OverlayText = styled.div`
  color: white;
  font-size: 16px;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  padding: 2px;
`;
