import { ICompanysImage } from "../../interfaces";
import { Icon } from "@iconify/react";
import { Container } from "./style";

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
