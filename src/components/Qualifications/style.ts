import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 600px;

  margin: 0 auto;
  padding-bottom: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > h2 {
    width: 100%;
    max-width: 400px;

    font-size: 35px;
    text-align: center;

    padding-bottom: 20px;
  }

  & > div:nth-child(2) {
    width: 100%;
    display: flex;
    flex-direction: row;

    & > hr {
      width: 1px;
      border: none;
      background-color: var(--white-color);
    }

    & > p {
      width: 100%;
      max-width: 299.75px;
      height: 60px;

      color: var(--gray-color);
      border-bottom: 1.5px solid var(--gray-color);

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 17px;
      letter-spacing: 0.1rem;
      transition: 0.3s all;

      cursor: pointer;

      &:hover {
        color: var(--purple-color);
        border-bottom-color: var(--purple-color);
      }
    }
  }

  & > div:nth-child(3) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    & > div {
      & > div {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      & > div:nth-child(1) {
        padding-bottom: 5px;

        & > figure {
          width: 50px;
          height: 50px;

          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

          border-radius: 50%;
          background-color: var(--black-color-two);
        }

        & > img {
          width: 50px;
          height: 50px;
        }
      }

      & > span {
        font-weight: 600;
        font-size: 13px;
        color: var(--gray-color-two);
      }

      & > p {
        font-weight: 500;
        font-size: 15px;
        color: var(--gray-color);

        width: 100%;
        max-width: 260px;

        padding-top: 15px;
      }

      & > div:nth-child(4) {
        padding: 15px 0 20px 0;

        & > p {
          font-size: 13px;
          font-weight: 600;
          color: var(--gray-color-two);

          padding-left: 10px;
        }
      }

      & > a {
        width: 100%;
        max-width: 260px;
        height: 45px;

        border-radius: 4px;
        background-color: var(--black-color);
        border: 1.5px solid var(--purple-color);

        font-weight: 600;
        font-size: 14px;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        color: var(--purple-color);

        &:hover {
          background-color: var(--purple-color);
          border-color: var(--purple-color);
          color: var(--black-color);
        }
      }
    }
  }
`;

export { Container };
