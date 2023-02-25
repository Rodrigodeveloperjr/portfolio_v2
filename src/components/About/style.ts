import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 450px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-top: 200px;

  & > img {
    width: 450px;
    height: 450px;

    object-fit: contain;
    border-radius: 50%;

    box-shadow: 0.1rem 0.1rem 1rem 0.1rem var(--purple-color);
  }

  & > div {
    width: 100%;
    max-width: 600px;

    & > div {
      margin-bottom: 20px;
    }

    & > div:nth-child(1) {
      height: 144px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      & > h2 {
        font-size: 12px;
        letter-spacing: 0.1rem;
      }

      & > h3 {
        font-size: 32px;
        font-weight: 400;
      }
    }

    & > div:nth-child(2) {
      height: 115px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      & > p {
        font-size: 15px;
        color: var(--gray-color);
      }
    }

    & > div:nth-child(3) {
      width: 100%;
      max-width: 369.56px;
      height: 45px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export { Container };
