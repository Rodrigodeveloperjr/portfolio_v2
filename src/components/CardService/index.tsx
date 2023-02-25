import { Container } from "./style";

interface ICardService {
  title: string;
  description: string;
}

const CardService = ({ title, description }: ICardService) => {
  return (
    <Container>
      <h3>{title}</h3>

      <p>{description}</p>
    </Container>
  );
};

export { CardService };
