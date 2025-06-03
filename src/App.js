import About from './components/About';
import Header from './components/Header';
import Skills from './components/Skills';
import { Container } from 'react-bootstrap';

function App() {
  return (
  <>  
    <Header></Header>
    <Container>
      <About></About>
      <Skills></Skills>
    </Container>
  </>
  );
}

export default App;
