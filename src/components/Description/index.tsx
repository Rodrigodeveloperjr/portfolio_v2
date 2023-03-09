import { IDescription } from "../../interfaces";
import { Container } from "./style";

const Description = ({ description }: IDescription) => {
  return <Container>{description}</Container>;
};

export { Description };
