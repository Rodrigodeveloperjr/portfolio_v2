import styled from "styled-components";

const Container = styled.button`
  width: 100%;
  max-width: 174.78px;
  height: 45px;

  border-radius: 4px;
  background-color: var(--black-color);
  border: 1.5px solid var(--purple-color);

  font-weight: 600;
  font-size: 14px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  color: var(--purple-color);

  &:hover {
    background-color: var(--purple-color);
    border-color: var(--purple-color);
    color: var(--black-color);
  }
`;

export { Container };
