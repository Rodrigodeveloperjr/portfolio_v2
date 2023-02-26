import { Container } from "./style";

const Home = () => {
  return (
    <Container id="home">
      <hgroup>
        <h1>
          Olá, eu sou <p>Rodrigo</p>
        </h1>
        <h2>Full Stack Developer</h2>
      </hgroup>

      <div>
        <p>
          Fico feliz em vê-lo (a) por aqui. Espero que aproveite o conteúdo e
          que eu possa te ajudar de alguma forma.
        </p>

        <a href="#about">Conhecer mais</a>
      </div>
    </Container>
  );
};

export { Home };
