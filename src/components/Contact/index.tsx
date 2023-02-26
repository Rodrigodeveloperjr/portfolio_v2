import { ContactLink } from "../ContactLink";
import { Container } from "./style";

const Contact = () => {
  return (
    <Container id="contacts">
      <h2>Networking</h2>

      <p>
        Você pode me enviar um email ou conversar diretamente através das minhas
        redes.
      </p>

      <nav>
        <ContactLink
          icon="mdi:linkedin"
          title="LinkedIn"
          href="https://www.linkedin.com/in/rodrigo-de-jesus-silva/"
        />
        <ContactLink
          icon="mdi:github"
          title="GitHub"
          href="https://github.com/Rodrigodeveloperjr/"
        />
        <ContactLink
          icon="mdi:instagram"
          title="Instagram"
          href="https://www.instagram.com/eaedigooo/"
        />
      </nav>
    </Container>
  );
};

export { Contact };
