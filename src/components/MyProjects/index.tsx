import motorshop from "../../assets/Screenshot from 2023-02-16 10-17-05.png";
import gitsearch from "../../assets/Screenshot from 2023-02-17 15-30-25.png";
import nukenzie from "../../assets/Screenshot from 2023-02-18 14-13-15.png";
import { Container } from "../Knowledge/style";
import { ButtonLink } from "../ButtonLink";
import { Project } from "../Project";

const MyProjects = () => {
  return (
    <Container id="projects">
      <h2>Meus projetos</h2>

      <menu>
        <Project
          src={motorshop}
          alt="Motors Shop"
          title="Motors Shop"
          linkGitHub="https://github.com/Rodrigodeveloperjr/motors-shop/"
          linkSite="https://motors-shop-beta.vercel.app/"
        />
        <Project
          src={gitsearch}
          alt="Git Search"
          title="Git Search"
          linkGitHub="https://github.com/Rodrigodeveloperjr/git-search/"
          linkSite="https://git-search-beta.vercel.app/"
        />
        <Project
          src={nukenzie}
          alt="Nu Kenzie"
          title="Nu Kenzie"
          linkGitHub="https://github.com/Rodrigodeveloperjr/refactoring-nukenzie/"
          linkSite="https://refactoring-nukenzie-rmngcex4u-rodrigojsdeveloper.vercel.app/"
        />
      </menu>

      <ButtonLink href="https://github.com/Rodrigodeveloperjr" target="_blank">
        Abrir Github
      </ButtonLink>
    </Container>
  );
};

export { MyProjects };
