import { Icon } from "@iconify/react";
import { Container } from "./style";

interface ICertification {
  src: string;
  alt: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

const Certification = ({
  src,
  alt,
  title,
  description,
  date,
  link,
}: ICertification) => {
  return (
    <Container>
      <div>
        <figure>
          <Icon icon="icons8:student" color="#8257e5" fontSize={25} />
        </figure>

        <img src={src} alt={alt} />
      </div>

      <span>{title}</span>

      <p>{description}</p>

      <div>
        <Icon icon="uiw:date" color="white" />
        <p>{date}</p>
      </div>

      <a href={link} target="_blank">
        Visuzalizar certificado
      </a>
    </Container>
  );
};

export { Certification };
