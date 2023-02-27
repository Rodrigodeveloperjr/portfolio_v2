import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  height: 270px;

  padding: 20px;

  border-radius: 4px;
  border: 3px solid var(--black-color-two);

  & > p {
    font-weight: 500;
    font-size: 15px;
    color: var(--gray-color);

    margin-top: 15px;
  }
`;

export { Container };
