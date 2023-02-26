import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 297px;
  height: 60px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  border-radius: 4px;
  background-color: var(--black-color-two);

  padding: 10px 20px;
  margin: 0 10px 10px 0;

  & > p {
    font-size: 500;
    font-size: 16px;

    padding-left: 15px;
    color: var(--gray-color);
  }

  @media (max-width: 425px) {
    margin: 0;
    margin-bottom: 10px;
  }
`;

export { Container };
