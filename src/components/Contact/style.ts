import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 50px;
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
`;

export { Container };
