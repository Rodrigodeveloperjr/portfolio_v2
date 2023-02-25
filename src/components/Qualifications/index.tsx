import kenzie from "../../assets/kenzie.png";
import { Icon } from "@iconify/react";
import { Container } from "./style";

const Qualifications = () => {
  return (
    <Container>
      <h2>Minhas qualificações e experiências</h2>

      <div>
        <p>Qualificações</p>
        <hr />
        <p>Trabalhos</p>
      </div>

      <div>
        <div>
          <div>
            <figure>
              <Icon icon="icons8:student" color="#8257e5" fontSize={25} />
            </figure>

            <img src={kenzie} alt="Kenzie" />
          </div>

          <span>Desenvolvimento Full Stack</span>

          <p>
            Curso de 2.000 horas de Desenvolvimento Full Stack que abrange
            tecnologias Front End e Back End além de soft skills necessárias
            para o mercado de trabalho. Entre as linguagens e tecnologias
            aprendidas, estão HTML5, CSS3, JavaScript (ES6+), React, Node.js,
            Python (Django e Flask) e SQL.
          </p>

          <div>
            <Icon icon="uiw:date" color="white" />
            <p>2022-2023</p>
          </div>

          <a>Visuzalizar certificado</a>
        </div>
      </div>
    </Container>
  );
};

export { Qualifications };
