import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;

  & > h1 {
    font-size: 28px;
    font-weight: 100;

    padding-bottom: 40px;
  }

  & > a {
    color: var(--white-color);
    font-size: 70px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    & > p {
      color: var(--purple-color);
    }
  }
`;

export { Container };
