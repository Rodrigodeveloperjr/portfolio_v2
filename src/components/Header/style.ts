import { animationUp } from "../../animations";
import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 80px;

  padding: 20px 120px;
  background-color: var(--black-color-two);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  z-index: 1000;
  top: 0;

  animation: ${animationUp} 0.5s;

  & > a {
    color: var(--white-color);
    font-size: 28px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    & > p {
      color: var(--purple-color);
    }
  }

  .menu {
    width: 60px;
    height: 60px;

    cursor: pointer;
  }

  .hamburguer {
    position: relative;
    display: block;
    background: #fff;
    width: 30px;
    height: 2px;
    top: 29px;
    left: 15px;
    transition: 0.5s ease-in-out;
  }

  .hamburguer:before,
  .hamburguer:after {
    background: #fff;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: 0.5s ease-in-out;
  }

  .hamburguer:before {
    top: -10px;
  }

  .hamburguer:after {
    bottom: -10px;
  }

  input {
    display: none;
  }

  input:checked ~ label .hamburguer {
    transform: rotate(45deg);
  }

  input:checked ~ label .hamburguer:before {
    transform: rotate(90deg);
    top: 0;
  }

  input:checked ~ label .hamburguer:after {
    transform: rotate(90deg);
    bottom: 0;
  }

  & > nav {
    width: 250px;
    height: 400px;

    position: absolute;
    top: 80px;
    right: 120px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: var(--black-color-two);

    & > a {
      position: relative;
      width: min-content;
      white-space: nowrap;

      margin-bottom: 25px;
      font-size: 24px;
      transition: all 0.3s;
      color: var(--white-color);

      &:hover {
        color: var(--purple-color);
      }

      ::after,
      ::before {
        content: "";
        position: absolute;
        bottom: -2px;
        height: 2px;
        width: 0;
        transition: 0.3s;
        background-color: var(--purple-color);
      }

      ::after {
        left: 50%;
      }

      ::before {
        right: 50%;
      }

      :hover::after,
      :hover::before {
        width: 50%;
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 20px;

    & > nav {
      right: 20px;
    }
  }
`;

export { Container };
