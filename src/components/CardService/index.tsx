import { ICardService } from "../../interfaces";
import { Container } from "./style";

const CardService = ({ title, description }: ICardService) => {
  return (
    <Container>
      <h3>{title}</h3>

      <p>{description}</p>
    </Container>
  );
};

export { CardService };
