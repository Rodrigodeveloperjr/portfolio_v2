import { ITitle } from "../../interfaces";
import { Container } from "./style";

const Title = ({ title }: ITitle) => {
  return <Container>{title}</Container>;
};

export { Title };
