import { animationText } from "../../animations";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  right: 0;
  z-index: 2000;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: var(--black-color);

  & > p {
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;

    color: var(--purple-color);

    display: flex;
    flex-direction: row;

    animation: ${animationText} 0.8s infinite alternate;

    & > p {
      font-weight: 400;
      font-style: italic;

      padding-left: 5px;

      color: var(--white-color);
    }
  }
`;

export { Container };
