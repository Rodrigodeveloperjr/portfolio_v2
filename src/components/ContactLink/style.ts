import styled from "styled-components";

const Container = styled.a`
  width: 300px;
  height: 60px;

  padding: 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: relative;

  border-radius: 4px;
  background-color: var(--black-color);
  border: 2px solid var(--black-color-two);

  &:nth-child(2n) {
    margin: 0 10px;
  }

  ::before,
  ::after {
    content: "";
    pointer-events: none;
    position: absolute;
    width: 0;
    height: 0;
    bottom: 0;
    right: 0;
    border: 0 solid transparent;

    border-radius: 4px;
  }

  ::before {
    border-bottom-width: 2px;
    border-left-width: 2px;
  }

  ::after {
    border-top-width: 2px;
    border-right-width: 2px;
  }

  :hover::before,
  :hover::after {
    border-color: var(--purple-color);
    transition: border-color 0s, width 0.25s, height 0.25s;
    width: 100%;
    height: 100%;
  }

  :hover::before {
    transition-delay: 0s, 0s, 0.25s;
  }

  :hover::after {
    transition-delay: 0s, 0.25s, 0s;
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
