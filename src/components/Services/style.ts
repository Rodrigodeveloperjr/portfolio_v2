import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1400px;

  padding-top: 90px;
  
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

      margin: 0 15px;
    }

    & > p:nth-child(3) {
      width: 100%;
      max-width: 300px;

      font-size: 18px;
      color: var(--gray-color);
    }
    
    @media (max-width: 768px) {

      flex-direction: column;
      align-items: flex-start;

      & > p:nth-child(1) {
        padding-bottom: 20px;
      }

      & > hr {
        display: none;
      }
    }
  }

  & > menu {
    width: 100%;
    max-width: 1400px;

    flex-wrap: wrap;
    display: flex;

    padding-bottom: 90px;
  }
`;

export { Container };
