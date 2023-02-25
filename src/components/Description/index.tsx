import { Container } from "./style";

interface IDescription {
  description: string;
}

const Description = ({ description }: IDescription) => {
  return <Container>{description}</Container>;
};

export { Description };
