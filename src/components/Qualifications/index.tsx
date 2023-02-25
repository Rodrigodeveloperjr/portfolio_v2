import kenzie from "../../assets/kenzie.png";
import { Certification } from "../Certification";
import { Job } from "../Job";
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

      <menu>
        <Certification
          src={kenzie}
          alt="Kenzie"
          title="Desenvolvimento Full Stack"
          description="Curso de 2.000 horas de Desenvolvimento Full Stack que abrange
        tecnologias Front End e Back End além de soft skills necessárias para o
        mercado de trabalho. Entre as linguagens e tecnologias aprendidas, estão
        HTML5, CSS3, JavaScript (ES6+), React, Node.js, Python (Django e Flask)
        e SQL."
          date="2022-2023"
          link=""
        />
      </menu>
      <menu>
        <Job
          src={kenzie}
          alt="Kenzie"
          title="Monitor"
          description=""
          date="07/2022-10/2022"
        />
      </menu>
    </Container>
  );
};

export { Qualifications };
