import { IconType } from "react-icons/lib";
import { Container } from "./style";

interface IStack {
  icon: IconType;
  title: string;
}

const Stack = ({ icon: Icon, title }: IStack) => {
  return (
    <Container>
      <Icon color="#8257E5" size={30} />

      <p>{title}</p>
    </Container>
  );
};

export { Stack };
