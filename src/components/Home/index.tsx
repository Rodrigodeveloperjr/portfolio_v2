import { useTypewriter, Cursor } from "react-simple-typewriter";
import { ButtonLink } from "../ButtonLink";
import { Container } from "./style";

const Home = () => {

  const [text] = useTypewriter({
    words: [
      "Front-end Developer",
      "Back-end Developer",
      "Full Stack Developer",
    ],
    loop: true,
  });

  return (
    <Container id="home">
      <hgroup>
        <h1>
          Olá, eu sou <p>Rodrigo</p>
        </h1>
        <h2>{text} <Cursor
          cursorBlinking={true}
          cursorColor={"#8257E5"}
        /></h2>
      </hgroup>

      <div>
        <p>
          Fico feliz em vê-lo (a) por aqui. Espero que aproveite o conteúdo e
          que eu possa te ajudar de alguma forma.
        </p>

        <ButtonLink color="purple" size="default" href="#about">
          Conhecer mais
        </ButtonLink>
      </div>
    </Container>
  );
};

export { Home };
