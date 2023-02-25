import { Container } from "./style";
import React from "react";

interface IButtonLink {
  children: React.ReactNode;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
}

const ButtonLink = ({ children, href, target }: IButtonLink) => {
  return (
    <Container href={href} target={target}>
      {children}
    </Container>
  );
};

export { ButtonLink };
