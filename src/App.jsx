import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';

// Pages
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <Container>
        <HomePage></HomePage>
        Sakurai Challenges You
      </Container>
    </Router>
  );
}

export default App;
