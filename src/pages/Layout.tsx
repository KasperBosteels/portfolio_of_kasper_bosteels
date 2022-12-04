import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavBar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import {Outlet} from "react-router-dom"
import { ThemeProvider } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
const Layout = ()=>{
    return (
        <>
        <ThemeProvider>
        <NavBar bg="light" expand="lg">
        <Container>
            <LinkContainer to="/">
            <NavBar.Brand>Portfolio</NavBar.Brand>
            </LinkContainer>
            <NavBar.Toggle aria-controls="basic-navbar-nav"/>
            <NavBar.Collapse id="basic-navbar-bar">
            <Nav className="me-auto">
                <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>   
                <LinkContainer to="/About"><Nav.Link >About</Nav.Link></LinkContainer>   
                <LinkContainer to="/Components"><Nav.Link >Componenten</Nav.Link></LinkContainer>   
                <LinkContainer to="/Contact"><Nav.Link>Contact</Nav.Link></LinkContainer>   
            </Nav>
            </NavBar.Collapse>
        </Container>
        <Button variant="light" style={{marginRight:10}} onClick={()=>console.log("toggle")} aria-label="toggle to a different theme">Dark</Button>
        </NavBar>
        <Container style={{justifyContent:"center", justifyItems:"center", display:"flex", maxWidth:"95%", maxHeight:"80%"}}>
        <Outlet/>
        </Container>
        </ThemeProvider>
        </>
    )
}
export default Layout;