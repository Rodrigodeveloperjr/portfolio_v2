import { stacks } from "../../utils/stacks";
import { Container } from "./style";
import { Stack } from "../Stack";

const Knowledge = () => {
  return (
    <Container id="knowledge">
      <h2>Conhecimento</h2>

      <menu>
        {stacks.map((stack, i) => (
          <Stack icon={stack.img} title={stack.title} key={i} />
        ))}
      </menu>
    </Container>
  );
};

export { Knowledge };
