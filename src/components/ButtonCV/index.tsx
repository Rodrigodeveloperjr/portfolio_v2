import { Container } from "./style";

const ButtonCV = () => {
  const downloadPDF = () => {
    const url = "cv";
    window.open(url, "_blank");
  };

  return <Container onClick={downloadPDF}>Baixar CV</Container>;
};

export { ButtonCV };
