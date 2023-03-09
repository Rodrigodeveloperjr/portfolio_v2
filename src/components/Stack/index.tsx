import { IStack } from "../../interfaces";
import { Container } from "./style";

const Stack = ({ icon: Icon, title }: IStack) => {
  return (
    <Container>
      <Icon color="#8257E5" size={30} />

      <p>{title}</p>
    </Container>
  );
};

export { Stack };
