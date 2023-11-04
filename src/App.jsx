
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NavBar from "./NavBar"
import Jumbotron from './Jumbotron';
import CardComponent from './CardComponent';
import FooterComponent from './FooterComponent';
import './Footer.css';
import './NavLinks.css';
import './CardStyle.css';
import './NavLinks.css';
import './App.css'

function App() {
  

  return (
    <>
      <Container fluid>
      <NavBar />
      <Jumbotron />
      <CardComponent />
      <FooterComponent />
      </Container>
    </>
  )
}

export default App
