import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { Container } from "./style";

const NotFound = () => {
  const [text] = useTypewriter({
    words: ["Página não encontrada"],
    loop: 1,
  });

  return (
    <Container>
      <h1>
        {text} <Cursor cursorBlinking={true} cursorColor={"#8257E5"} />
      </h1>

      <Link to="/">
        {"<D"}
        <p>{"R>"}</p>
      </Link>
    </Container>
  );
};

export { NotFound };
