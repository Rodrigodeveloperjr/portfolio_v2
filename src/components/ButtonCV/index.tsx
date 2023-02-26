import CV from "../../assets/Currículo - Rodrigo.pdf";
import { Container } from "./style";

const ButtonCV = () => {
  const downloadPDF = async () => {
    const response = await fetch(CV);
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "Currículo - Rodrigo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return <Container onClick={downloadPDF}>Baixar CV</Container>;
};

export { ButtonCV };
