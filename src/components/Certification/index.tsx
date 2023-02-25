import { CompletionDate } from "../CompletionDate";
import { CompanysImage } from "../CompanysImage";
import { Description } from "../Description";
import { Container } from "./style";
import { Title } from "../Title";

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
      <CompanysImage icon="icons8:student" srcCompany={src} altCompany={alt} />

      <Title title={title} />

      <Description description={description} />

      <CompletionDate date={date} />

      <a href={link} target="_blank">
        Visuzalizar certificado
      </a>
    </Container>
  );
};

export { Certification };