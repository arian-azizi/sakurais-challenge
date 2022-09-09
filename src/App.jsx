import { Container } from 'react-bootstrap';

// Pages
import HomePage from './pages/HomePage';
import CharacterPage from './pages/CharacterPage';

function App() {
  return (
    <Container>
      <div>Join the Smash Challenge!</div>
      <HomePage />
    </Container>
  );
}

export default App;
