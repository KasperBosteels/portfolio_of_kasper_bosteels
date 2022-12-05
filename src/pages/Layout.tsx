import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavBar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import {Outlet} from "react-router-dom"
import {LinkContainer} from "react-router-bootstrap";
import React, { useState } from "react"
import useLocalStorage from 'use-local-storage'
export interface mode {
    theme:string;
}
export const modeDataContext = React.createContext<mode>({theme:"light"})
const Layout = ()=>{
   const [theme,setTheme] = useLocalStorage('theme' ? 'dark' : 'light',"light");
   
   const toggle = () =>{
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
   }
    return (
        <>
        <NavBar bg="dark" expand="lg" variant="dark">
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
        <Button variant={theme === "dark" ? "light" : "dark"} className= "toggleButton" onClick={()=>toggle()} aria-label="button to toggle to a different theme">{theme}</Button>
        </NavBar>
        <Container style={{transition:"all",transitionDuration:".5s" ,justifyContent:"center", justifyItems:"center", display:"flex",left:0,right:0 , height:"100%" ,backgroundColor:(theme === "dark" ? "#0000" : "#ffffff"), color:(theme ==="dark" ? "#ffffff" : "#000000") }}>
        <modeDataContext.Provider value={{theme:theme}}>
        <Outlet />
        </modeDataContext.Provider>
        </Container>
        
        </>
    )
}
export default Layout;
