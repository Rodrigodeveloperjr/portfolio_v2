import styled from "styled-components";

const Container = styled.div`
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
`;

export { Container };
