import { IContactLink } from "../../interfaces";
import { Icon } from "@iconify/react";
import { Container } from "./style";

const ContactLink = ({ icon, title, href }: IContactLink) => {
  return (
    <Container href={href} target="_blank">
      <div>
        <Icon icon={icon} color="#8257E5" fontSize={30} />

        <p>{title}</p>
      </div>
    </Container>
  );
};

export { ContactLink };
