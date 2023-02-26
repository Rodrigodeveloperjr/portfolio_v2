import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 600px;

  margin: 0 auto;
  padding-bottom: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 130px;

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

  .menuCertifications,
  .menuJobs {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .menuCertifications {
    justify-content: flex-start;
    padding: 25px;
  }

  .menuJobs {
    padding-top: 25px;
    justify-content: center;
  }
`;

export { Container };
