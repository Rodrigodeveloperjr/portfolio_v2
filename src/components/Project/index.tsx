import { Container } from "./style";

interface IProject {
  src: string;
  alt: string;
  title: string;
  linkGitHub: string;
  linkSite: string;
}

const Project = ({ src, alt, title, linkGitHub, linkSite }: IProject) => {
  return (
    <Container>
      <img src={src} alt={alt} />

      <div>
        <p>{title}</p>

        <nav>
          <a href={linkGitHub} target="_blank">
            GitHub
          </a>
          <a href={linkSite} target="_blank">
            Site
          </a>
        </nav>
      </div>
    </Container>
  );
};

export { Project };
