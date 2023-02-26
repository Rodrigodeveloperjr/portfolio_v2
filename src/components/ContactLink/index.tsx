import { Icon } from "@iconify/react";
import { Container } from "./style";

interface IContactLink {
  icon: string;
  title: string;
}

const ContactLink = ({ icon, title }: IContactLink) => {
  return (
    <Container>
      <div>
        <Icon icon={icon} color="#8257E5" fontSize={30} />

        <p>{title}</p>
      </div>
    </Container>
  );
};

export { ContactLink };
  