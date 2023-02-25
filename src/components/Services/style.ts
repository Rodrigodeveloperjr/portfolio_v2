import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1400px;

  & > div {
    width: 100%;
    max-width: 850px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding-bottom: 60px;

    & > p:nth-child(1) {
      max-width: 45px;
      font-weight: 700;
      font-size: 34px;

      width: 100%;
      max-width: 450px;

      display: flex;
      flex-direction: row;
    }

    & > hr {
      width: 2px;
      height: 102px;
      border: none;
      background-color: var(--purple-color);
    }

    & > p:nth-child(3) {
      width: 100%;
      max-width: 300px;

      font-size: 18px;
      color: var(--gray-color);
    }
  }

  & > menu {
    width: 100%;
    max-width: 1400px;

    flex-wrap: wrap;
    display: flex;

    padding-bottom: 90px;

    & > div:nth-child(2),
    & > div:nth-child(5) {
      margin: 0 20px 20px 20px;
    }
  }
`;

export { Container };
