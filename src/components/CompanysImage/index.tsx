import { Icon } from "@iconify/react";
import { Container } from "./style";

interface ICompanysImage {
  icon: string;
  srcCompany: string;
  altCompany: string;
}

const CompanysImage = ({ icon, srcCompany, altCompany }: ICompanysImage) => {
  return (
    <Container>
      <figure>
        <Icon icon={icon} color="#8257e5" fontSize={25} />
      </figure>

      <img src={srcCompany} alt={altCompany} />
    </Container>
  );
};

export { CompanysImage };
