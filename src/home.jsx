
import Container from 'react-bootstrap/Container';
import NavBar from "./NavBar"
import Jumbotron from './Jumbotron';
import CardComponent from './CardComponent';
import FooterComponent from './FooterComponent';
import './Footer.css';
import './NavLinks.css';
import './CardStyle.css';
import './NavLinks.css';


const Home = () => {
	return (
		// <div className="container">
		
	<Container fluid>
      <NavBar />
      <Jumbotron />
      <CardComponent />
      <FooterComponent />
      </Container>
		// </div>

		
	);
};

export default Home;
