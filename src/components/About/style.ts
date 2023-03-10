import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1250px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  padding: 300px 0;

  & > img {
    width: 450px;
    height: 450px;

    object-fit: contain;
    border-radius: 50%;

    box-shadow: 0.1rem 0.1rem 1rem 0.1rem var(--purple-color);

    @media (max-width: 768px) {
      width: 100%;
      max-width: 450px;
    }
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

      & > div {
        display: flex;
        flex-direction: row;
        align-items: center;

        & > h2 {
          font-size: 12px;
          letter-spacing: 0.1rem;

          padding-left: 5px;
        }
      }

      & > h3 {
        font-size: 32px;
        font-weight: 400;
      }

      @media (max-width: 768px) {
        height: unset;

        & > h3 {
          font-size: 24px;
          padding-top: 5px;
          padding-bottom: 10px;
        }
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

      @media (max-width: 768px) {
        height: unset;

        & > p {
          font-size: 13px;
          padding-bottom: 20px;
        }
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

      & > button:nth-child(1) {
        margin-right: 10px;
      }
    }
  }

  @media (max-width: 1440px) {
    flex-direction: column;
    height: unset;

    & > div {
      padding-top: 80px;
    }
  }

  @media (min-width: 1440px) {
    padding-top: 200px;
  }
`;

export { Container };
