import { IProject } from "../../interfaces";
import { ButtonLink } from "../ButtonLink";
import { Container } from "./style";

const Project = ({ src, alt, title, linkGitHub, linkSite }: IProject) => {
  return (
    <Container>
      <img src={src} alt={alt} />

      <div>
        <p>{title}</p>

        <nav>
          <ButtonLink
            color="purple"
            size="small"
            href={linkGitHub}
            target="_blank"
          >
            GitHub
          </ButtonLink>
          <ButtonLink
            color="black"
            size="small"
            href={linkSite}
            target="_blank"
          >
            Site
          </ButtonLink>
        </nav>
      </div>
    </Container>
  );
};

export { Project };
