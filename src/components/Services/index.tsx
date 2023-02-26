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
          description="Um desenvolvimento focado na criação de sites, páginas únicas, 
          E-commerce ou outras aplicações. Promovendo uma boa experiência e uma boa 
          otimização do site."
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
          title="Desenvolvimento Backend"
          description="Um desenvolvimento focado em ações que os usuários fazem no frontend, 
          armazena os dados sendo consumidos, manipulados pelo aplicativos ou softwares e criação de apis."
        />
        <CardService
          title="Desenvolvimento Mobile"
          description="Um desenvolvimento focado em tablets, 
          smartphones e outros dispositivos móveis. Tendo como objetivo
          promover uma boa experiência para o usuário em telas menores."
        />
        <CardService
          title="DevOps"
          description="Introduzo processos, ferramentas e metodologias
          para as necessidades ao longo do ciclo de vida dos meus softwares,
          em todos os processos."
        />
      </menu>
    </Container>
  );
};

export { Services };
