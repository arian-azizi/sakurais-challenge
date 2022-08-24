import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';

// Pages
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <Router>
      <Container>

        Sakurai Challenges You
      </Container>
    </Router>
  );
}

export default App;
