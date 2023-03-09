import { IButtonLink } from "../../interfaces";
import { Container } from "./style";

const ButtonLink = ({ children, href, target, size, color }: IButtonLink) => {
  return (
    <Container href={href} target={target} size={size} color={color}>
      {children}
    </Container>
  );
};

export { ButtonLink };
