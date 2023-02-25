import { Container } from "./style";

interface ITitle {
  title: string;
}

const Title = ({ title }: ITitle) => {
  return <Container>{title}</Container>;
};

export { Title };
