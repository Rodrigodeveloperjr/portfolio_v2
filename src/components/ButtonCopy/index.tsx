import { IButtonCopy } from "../../interfaces";
import { Container } from "./style";
import { useState } from "react";

const ButtonCopy = ({ link }: IButtonCopy) => {
  const [copy, setCopy] = useState<boolean>(false);

  const copyLink = () => {
    navigator.clipboard.writeText(link);
    setCopy(true);
    setTimeout(() => setCopy(false), 2000);
  };

  return (
    <Container onClick={copyLink}>
      {copy ? "Copiado!" : "Copiar email"}
    </Container>
  );
};

export { ButtonCopy };
