import { ICompletionDate } from "../../interfaces";
import { Icon } from "@iconify/react";
import { Container } from "./style";

const CompletionDate = ({ date }: ICompletionDate) => {
  return (
    <Container>
      <Icon icon="uiw:date" color="white" />
      <p>{date}</p>
    </Container>
  );
};

export { CompletionDate };
