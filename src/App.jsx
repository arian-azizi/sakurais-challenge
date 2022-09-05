import './App.css';
import { Container } from 'react-bootstrap';

// Pages
import HomePage from './pages/HomePage';
import { useEffect } from 'react';

const App = () => {
  return (
    <Container>
      Sakurai Challenges You
      <HomePage></HomePage>
    </Container>
  );
}

export default App;
