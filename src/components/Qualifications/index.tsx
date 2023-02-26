import { Certification } from "../Certification";
import kenzie from "../../assets/kenzie.png";
import { Container } from "./style";
import { useState } from "react";
import { Job } from "../Job";

const Qualifications = () => {
  const [change, setChange] = useState<boolean>(false);

  return (
    <Container id="qualifications">
      <h2>Minhas qualificações e experiências</h2>

      <div>
        <p
          onClick={() => setChange(false)}
          style={
            change
              ? { borderColor: "#CCC", color: "#CCC" }
              : { borderColor: "#8257E5", color: "#8257E5" }
          }
        >
          Qualificações
        </p>
        <hr />
        <p
          onClick={() => setChange(true)}
          style={
            change
              ? { borderColor: "#8257E5", color: "#8257E5" }
              : { borderColor: "#CCC", color: "#CCC" }
          }
        >
          Trabalhos
        </p>
      </div>

      {change ? (
        <menu className="menuJobs">
          <Job
            src={kenzie}
            alt="Kenzie"
            title="Monitor"
            description="Responsável por prestar assistência aos novos alunos dos primeiros módulos
            Principais atividades:
            - Contato ativo com os alunos;
            - Correção das entregas em (HTML, CSS, JavaScript, React, Typescript, Nodejs, Docker, ORM, TypeScript, PostgreSQL, Jest, Git);
            - Assistência no canal de dúvidas;
            - Relatórios sobre os alunos;
            - Aplicação de testes."
            date="07/2022 - 10/2022"
          />
        </menu>
      ) : (
        <menu className="menuCertifications">
          <Certification
            src={kenzie}
            alt="Kenzie"
            title="Desenvolvimento Full Stack"
            description="Curso de 2.000 horas de Desenvolvimento Full Stack que abrange
      tecnologias Front End e Back End além de soft skills necessárias para o
      mercado de trabalho. Entre as linguagens e tecnologias aprendidas, estão
      HTML5, CSS3, JavaScript (ES6+), React, Node.js, Python (Django e Flask)
      e SQL."
            date="2022 - 2023"
            link=""
          />
        </menu>
      )}
    </Container>
  );
};

export { Qualifications };
