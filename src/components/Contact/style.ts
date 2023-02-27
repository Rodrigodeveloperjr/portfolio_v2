import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 90px;
  padding-bottom: 120px;

  & > h2 {
    font-size: 60px;
    letter-spacing: 0.1rem;
    color: var(--purple-color);

    padding-bottom: 20px;
  }

  & > p {
    width: 100%;
    max-width: 550px;

    font-size: 18px;
    text-align: center;

    padding-bottom: 50px;
  }

  & > nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    flex-wrap: wrap;
  }

  @media (max-width: 425px) {
    & > h2 {
      font-size: 45px;
    }

    & > p {
      font-size: 16px;
    }
  }
`;

export { Container };
