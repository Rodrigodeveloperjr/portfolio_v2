import { CompletionDate } from "../CompletionDate";
import { CompanysImage } from "../CompanysImage";
import { IJob } from "../../interfaces";
import { Container } from "./style";
import { Title } from "../Title";

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
