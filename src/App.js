
import { Container } from '@chakra-ui/react';
import MainRoute from './routes/MainRoute';

function App() {
  return (
    <Container bg='indigo' maxW='full' h={['100vh']} p='0px' m='0px'>

      <MainRoute />
    </Container>
  );
}

export default App;
