import styled from "styled-components";

const Container = styled.button`
  width: 100%;
  max-width: 174.78px;
  height: 45px;

  border-radius: 4px;
  background-color: var(--black-color);
  border: 2px solid var(--purple-color);

  font-weight: 600;
  font-size: 14px;

  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: 0.3s;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  color: var(--purple-color);

  &::before {
    content: "";
    width: 0;
    height: 390%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background-color: var(--purple-color);
    transition: 0.5s ease;
    display: block;
    z-index: -1;
  }

  &:hover::before {
    width: 105%;
  }

  &:hover {
    color: var(--black-color);
  }
`;

export { Container };
