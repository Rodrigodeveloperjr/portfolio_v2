import { Container } from "./style";
import { useState } from "react";

const Header = () => {
  const [checkbox, setCheckbox] = useState<boolean>(false);

  return (
    <Container>
      <a>DEVELOPERODRIGO</a>

      <input id="menu-hamburguer" type="checkbox" />

      <label htmlFor="menu-hamburguer">
        <div
          className="menu"
          onClick={() => {
            setCheckbox(true);
            if (checkbox) {
              setCheckbox(false);
            }
          }}
        >
          <span className="hamburguer"></span>
        </div>
      </label>
      {checkbox ? (
        <nav>
          <a href="#home">Home</a>
          <a href="#about">Sobre</a>
          <a href="#qualifications">Qualificações</a>
          <a href="#services">Serviços</a>
          <a href="#knowledge">Conhecimento</a>
          <a href="#projects">Projetos</a>
          <a href="#contacts">Contato</a>
        </nav>
      ) : null}
    </Container>
  );
};

export { Header };
