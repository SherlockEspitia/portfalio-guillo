import About from './components/About';
import Header from './components/Header';
import Recommendations from './components/Recommendations';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { Container } from 'react-bootstrap';

function App() {
  return (
  <>  
    <Header></Header>
    <Container>
      <About></About>
      <Skills></Skills>
      <Projects/>
      <Recommendations></Recommendations>
    </Container>
  </>
  );
}

export default App;
