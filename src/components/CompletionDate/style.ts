import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 15px 0 20px 0;

  & > p {
    font-size: 13px;
    font-weight: 600;
    color: var(--gray-color-two);

    padding-left: 10px;
  }
`;

export { Container };
