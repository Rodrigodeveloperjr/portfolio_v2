import { CardService } from "../CardService";
import { Container } from "./style";

const Services = () => {
  return (
    <Container id="services">
      <div>
        <p>Conheça quais são os meus serviços</p>
        <hr />
        <p>Metodologias que eu utilizo nos meus trabalhos.</p>
      </div>
      <menu>
        <CardService
          title="Desenvolvimento Web"
          description="Um desenvolvimento focado na criação de sites, páginas únicas, E-commerce
      ou outras aplicações. Promovendo uma boa experiência e uma boa otimização
      do site."
        />
        <CardService
          title="Desenvolvimento Responsivo"
          description="Aplicação web responsiva, disponível para todos os dispositivos móveis,
          tornando o site mais prático e acessível. Ou aplicações 100% mobile,
          como aplicativos."
        />
        <CardService
          title="Experiência do usuário"
          description="Aplicações voltadas a um conjunto de elementos e fatores de um serviço,
          produto ou sistema que tem como objetivo promover uma boa experiência
          para o usuário."
        />
        <CardService
          title="Desenvolvimento Web"
          description="Um desenvolvimento focado na criação de sites, páginas únicas, E-commerce
      ou outras aplicações. Promovendo uma boa experiência e uma boa otimização
      do site."
        />
        <CardService
          title="Desenvolvimento Web"
          description="Um desenvolvimento focado na criação de sites, páginas únicas, E-commerce
      ou outras aplicações. Promovendo uma boa experiência e uma boa otimização
      do site."
        />
        <CardService
          title="Desenvolvimento Web"
          description="Um desenvolvimento focado na criação de sites, páginas únicas, E-commerce
      ou outras aplicações. Promovendo uma boa experiência e uma boa otimização
      do site."
        />
      </menu>
    </Container>
  );
};

export { Services };
