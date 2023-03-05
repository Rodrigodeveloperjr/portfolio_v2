import styled, { css } from "styled-components";

interface IButtonLinkStyle {
  size: "default" | "small";
  color: "black" | "purple";
}

const Container = styled.a<IButtonLinkStyle>`
  width: 100%;

  border-radius: 4px;

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

  ${({ size }) => {
    switch (size) {
      case "default":
        return css`
          max-width: 260px;
          height: 45px;
        `;

      case "small":
        return css`
          max-width: 100px;
          height: 30px;
        `;

      default:
        return false;
    }
  }}

  ${({ color }) => {
    switch (color) {
      case "black":
        return css`
          color: var(--purple-color);
          background-color: var(--black-color);
          border: 2px solid var(--purple-color);

          &::before {
            content: "";
            width: 0;
            height: 520%;
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

      case "purple":
        return css`
          color: var(--black-color);
          background-color: var(--purple-color);
          border: 2px solid var(--purple-color);

          &:hover {
            background-color: var(--purple-hover);
            border-color: var(--purple-hover);
          }
        `;

      default:
        return false;
    }
  }}
`;

export { Container };
