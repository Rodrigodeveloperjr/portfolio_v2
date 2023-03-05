import { Container } from "./style";
import React from "react";

interface IButtonLink {
  children: React.ReactNode;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  size: "default" | "small";
  color: "black" | "purple";
}

const ButtonLink = ({ children, href, target, size, color }: IButtonLink) => {
  return (
    <Container href={href} target={target} size={size} color={color}>
      {children}
    </Container>
  );
};

export { ButtonLink };
