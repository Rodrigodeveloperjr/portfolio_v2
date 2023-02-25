import my from "../../assets/IMG-20220905-WA0007.jpg";
import { Container } from "./style";

const About = () => {
  return (
    <Container>
      <img src={my} />

      <div>
        <div>
          <h2>Desenvolvedor Full Stack</h2>

          <h3>
            Desenvolvedor Full Stack com experiências em React, Node, JavaScript
            TypeScript e etc.
          </h3>
        </div>

        <div>
          <p>
            Meu nome é Rodrigo, tenho 19 anos e atuo na área de desenvolvimento
            a mais de 1 ano. Possuo experiência como monitor na Kenzie Academy,
            mas estou buscando uma primeira oportunidade no mercado como
            Desenvolvedor Júnior.
          </p>

          <p>
            Logo a baixo tem o meu currículo com informçôes mais detalhadas
            sobre mim. Se preferir, podemos marcar uma call atráves do meu
            e-mail que está disponibilizado.
          </p>
        </div>

        <div>
          <a href="../../assets/Currículo - Rodrigo.pdf" download={true}>Baixar CV</a>
          <input />
        </div>
      </div>
    </Container>
  );
};

export { About };
