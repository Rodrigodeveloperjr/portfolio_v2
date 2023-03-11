import styled, { keyframes } from "styled-components";

const animationText = keyframes`
  from {
    opacity: 0.5;
  }

  to {
    opacity: 1;
  }
`;

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
    font-size: 18px;
    line-height: 20px;

    color: var(--purple-color);
    animation: ${animationText} 0.8s infinite alternate;

    display: flex;
    flex-direction: row;

    & > p {
      font-weight: 400;
      font-style: italic;

      padding-left: 7px;

      color: var(--white-color);
    }
  }
`;

export { Container };
