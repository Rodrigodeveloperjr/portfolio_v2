import styled from "styled-components";

const Container = styled.div`
  width: 370px;
  height: 250px;

  border-radius: 4px;
  border: 2px solid var(--black-color-two);

  padding: 20px;

  & > h3 {
    font-size: 20px;
    font-weight: 600;
    color: var(--gray-color);

    padding-bottom: 20px;
  }

  & > p {
    font-size: 19px;
    font-weight: 500;
    letter-spacing: 0.1rem;

    color: var(--gray-color-two);
  }
`;

export { Container };
