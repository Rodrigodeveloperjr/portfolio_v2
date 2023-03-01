import my from "../../assets/IMG-20220905-WA0007-removebg-preview.png";
import { ButtonCopy } from "../ButtonCopy";
import { ButtonCV } from "../ButtonCV";
import { Icon } from "@iconify/react";
import { Container } from "./style";

const About = () => {
  const screenWidth = window.screen?.width;
  const aboutId = screenWidth >= 1440 ? "about" : "";
  const imgId = screenWidth <= 1440 ? "about" : "";

  return (
    <Container id={aboutId}>
      <img src={my} id={imgId} />

      <div>
        <div>
          <div>
            <Icon
              icon="material-symbols:double-arrow"
              color="#8257e5"
              fontSize={25}
            />
            <h2>Desenvolvedor Full Stack</h2>
          </div>

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
            Logo abaixo tem o meu currículo com informçôes mais detalhadas sobre
            mim. Se preferir, podemos marcar uma call atráves do meu email que
            está disponibilizado.
          </p>
        </div>

        <div>
          <ButtonCV />
          <ButtonCopy link="rodrigojsdeveloper@gmail.com" />
        </div>
      </div>
    </Container>
  );
};

export { About };
