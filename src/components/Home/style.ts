import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 660px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  & > hgroup {
    height: 166px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    text-align: center;

    & > h1 {
      font-weight: 100;
      font-size: 50px;

      display: flex;
      flex-direction: row;

      & > p {
        padding-left: 15px;
        color: var(--purple-color);
      }
    }

    & > h2 {
      font-weight: 600;
      font-size: 75px;
      letter-spacing: 0.1rem;
    }

    @media (max-width: 1024px) {
      height: unset;

      & > h1 {
        font-size: 40px;
      }

      & > h2 {
        font-size: 50px;
      }
    }

    @media (max-width: 768px) {
      & > h1 {
        font-size: 30px;
      }

      & > h2 {
        font-size: 40px;
      }
    }

    @media (max-width: 550px) {
      & > h1 {
        font-size: 20px;
      }

      & > h2 {
        font-size: 30px;
      }
    }
  }

  & > div {
    height: 122px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding-top: 10px;

    & > p {
      font-weight: 300;
      font-size: 14px;
      max-width: 450px;
      width: 100%;

      text-align: center;
    }

    & > a {
      width: 100%;
      max-width: 270px;
      height: 40px;

      font-weight: 600;
      font-size: 14px;

      border-radius: 4px;
      background-color: var(--purple-color);
      border: 1.5px solid var(--purple-color);

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      color: var(--black-color);

      &:hover {
        background-color: var(--purple-hover);
        border-color: var(--purple-hover);
      }
    }
  }
`;

export { Container };
