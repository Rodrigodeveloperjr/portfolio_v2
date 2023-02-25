import styled from "styled-components";

const Container = styled.div`
  & > h2 {
    font-size: 30px;
    font-weight: 600;

    text-align: center;
    color: var(--purple-color);

    padding-bottom: 50px;
  }

  & > menu {
    width: 100%;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    padding-bottom: 90px;
  }
`;

export { Container };
