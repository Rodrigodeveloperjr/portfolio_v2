import styled, { keyframes } from "styled-components";

const upScreen = keyframes`
   from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  position: relative;

  &:nth-child(2n) {
    margin: 0 10px;
  }

  &:hover {
    & > div {
      display: flex;
    }
  }

  & > img {
    width: 442.67px;

    border-radius: 4px;
    border: 2px solid var(--black-color-two);

    object-fit: contain;
  }

  & > div {
    width: 442.67px;
    height: 246px;

    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;

    animation: ${upScreen} 1s;
    background-color: var(--shadow);

    & > p {
      font-weight: 600;
      font-size: 24px;

      padding-bottom: 20px;
    }

    & > nav {
      width: 100%;
      max-width: 210px;
      height: 30px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      & > a {
        width: 100%;
        max-width: 100px;
        height: 30px;

        font-weight: 600;
        font-size: 14px;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        border-radius: 4px;
        border: 1.5px solid var(--purple-color);
      }

      & > a:nth-child(1) {
        background-color: var(--purple-color);
        color: var(--black-color);
      }

      & > a:nth-child(2) {
        background-color: var(--black-color);
        color: var(--purple-color);

        &:hover {
          background-color: var(--purple-color);
          color: var(--black-color);
        }
      }
    }
  }

  @media (max-width: 500px) {
    &:nth-child(2n) {
      margin: 0;
    }

    & > div {
      width: 100%;
      max-width: 442.67px;
    }
    & > img {
      width: 100%;
    }
  }
`;

export { Container };
