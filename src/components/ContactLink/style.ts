import styled from "styled-components";

const Container = styled.a`
  width: 300px;
  height: 60px;

  padding: 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  background-color: var(--black-color);
  border: 2px solid var(--black-color-two);

  &:nth-child(2n) {
    margin: 0 10px;
  }

  &:hover {
    border-color: var(--purple-color);
  }

  & > div {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    & > p {
      padding-left: 10px;

      font-size: 18px;
      font-weight: 600;
      color: var(--purple-color);
    }
  }

  @media (max-width: 1140px) {
    margin: 5px 0;
  }
`;

export { Container };
