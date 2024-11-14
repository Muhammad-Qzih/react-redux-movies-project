import styled from "styled-components";
import { Col, Row } from "react-bootstrap";

export const StyledRow = styled(Row)`
  justify-content: center;
  margin-top: 10px;
`;

export const MovieCardDetails = styled.div`
  height: 370px;
  border-radius: 20px;
  background-color: #2c2f3a;
  display: flex;
  align-items: center;
`;

export const MovieImage = styled.img`
  height: 360px;
  padding: 10px;
  border-radius: 20px;
  margin-left: 10px;
`;

export const MovieDetailsText = styled.p`
  color: white;
  font-family: Almarai, sans-serif;
  font-size: 23px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 49px;
  border-bottom: 1px solid white;
`;

export const MovieStoryCard = styled.div`
  height: 300px;
  border-radius: 20px;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const StoryTitle = styled.p`
  color: #555555;
  font-family: Almarai, sans-serif;
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 49px;
  border-bottom: 1px solid #555555;
  padding: 1rem;
  text-align: right;
`;

export const StoryText = styled.p`
  color: #555555;
  font-family: Almarai, sans-serif;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 32px;
  padding: 0 1rem;
  text-align: right;
`;

export const ButtonContainer = styled(Col)`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const CustomButton = styled.button`
  background-color: #2c2f3a;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }
`;
