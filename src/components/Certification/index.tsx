import { CompletionDate } from "../CompletionDate";
import { ICertification } from "../../interfaces";
import { CompanysImage } from "../CompanysImage";
import { Description } from "../Description";
import { ButtonLink } from "../ButtonLink";
import { Title } from "../Title";

const Certification = ({
  src,
  alt,
  title,
  description,
  date,
  link,
}: ICertification) => {
  return (
    <div>
      <CompanysImage icon="icons8:student" srcCompany={src} altCompany={alt} />

      <Title title={title} />

      <Description description={description} />

      <CompletionDate date={date} />

      <ButtonLink color="black" size="default" href={link} target="_blank">
        Visuzalizar certificado
      </ButtonLink>
    </div>
  );
};

export { Certification };
