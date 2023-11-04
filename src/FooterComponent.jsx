
import Navbar from 'react-bootstrap/Navbar';

const FooterComponent = () => {
    return (
        <Navbar className="mt-5" bg="dark" data-bs-theme="light" p-3>
            <p id="footer" className="text-light">Copyright @ Your Website 2023</p>
        </Navbar>
    )
}

export default FooterComponent;