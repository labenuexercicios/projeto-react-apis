import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from "../src/pages/Header/Header";
import Navrout from './routes/Navrout';

const App = () => {
  return (
    <Router>
      <Container>
      <Navrout/>
      </Container>
    </Router>
  );
}

export default App;
