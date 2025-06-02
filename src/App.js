import { Container } from 'react-bootstrap';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
  <>  
    <Header></Header>
    <Container>
      <About></About>
    </Container>
  </>
  );
}

export default App;
