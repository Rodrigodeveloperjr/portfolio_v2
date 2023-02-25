import { stacks } from '../../utils/stacks'
import { Stack } from '../Stack'
import { Container } from './style'

const Knowledge = () => {
  return (
    <Container>
      <h2>Conhecimento</h2>

      <menu>
        {
          stacks.map((stack, i) => (
            <Stack icon={stack.img} title={stack.title} key={i} />
          ))
        }
      </menu>
    </Container>
  )
}

export { Knowledge }
