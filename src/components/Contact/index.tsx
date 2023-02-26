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
        <ContactLink icon="mdi:github" title="LinkedIn" />
        <ContactLink icon="mdi:linkedin" title="GitHub" />
        <ContactLink icon="mdi:instagram" title="Instagram" />
      </nav>
    </Container>
  );
};

export { Contact };
