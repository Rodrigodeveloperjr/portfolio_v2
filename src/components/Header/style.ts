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
  top: 0;

  z-index: 2000;

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
      margin-bottom: 25px;
      font-size: 24px;
      transition: all 0.3s;
      color: var(--white-color);

      &:hover {
        color: var(--purple-color);
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
