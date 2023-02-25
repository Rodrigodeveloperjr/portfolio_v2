import { CompletionDate } from "../CompletionDate";
import { CompanysImage } from "../CompanysImage";
import { Container } from "./style";
import { Title } from "../Title";

interface IJob {
  src: string;
  alt: string;
  title: string;
  description: string;
  date: string;
}

const Job = ({ src, alt, title, description, date }: IJob) => {
  return (
    <Container>
      <CompanysImage
        icon="material-symbols:work"
        srcCompany={src}
        altCompany={alt}
      />

      <Title title={title} />

      <p>{description}</p>

      <CompletionDate date={date} />
    </Container>
  );
};

export { Job };
