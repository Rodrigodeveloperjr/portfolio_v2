import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

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
    width: 25px;
    height: 25px;

    margin-left: 20px;
  }
`;

export { Container };
