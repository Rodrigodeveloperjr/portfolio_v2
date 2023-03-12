import { animationUp } from "../../animations";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 100px;

  width: 100%;
  max-width: 1600px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  animation: ${animationUp} 0.5s;

  @media (max-width: 1024px) {
    padding: 0 50px;
  }

  @media (max-width: 425px) {
    padding: 0 20px;
  }
`;

export { Container };
