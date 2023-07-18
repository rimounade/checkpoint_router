import {Navbar,Nav,Container} from "react-bootstrap"
import { Link} from "react-router-dom"
const NavMovie = ()=>{
    return(
      // ********navbar*********
 
        <div className="navb">
         
        <Navbar className="Nav" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Moovie App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/ListMovie"}>Moovie</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
        </div>
    
    )
}
export default NavMovie