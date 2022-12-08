import Container from "react-bootstrap/Container"
import {Outlet} from "react-router-dom"
import React from "react"
import NavigationBar from "../components/Menu"
import { ThemeProvider } from "@emotion/react";
export interface mode {
    theme:string;
    toggle:()=>void;
}
export interface modeContext {
    theme:string
}
export const modeDataContext = React.createContext<modeContext>({theme:"light"})
const Layout = ({theme,toggle}:mode)=>{
   
    return (
        <>
        <NavigationBar theme={theme} toggle={toggle}/>
        <modeDataContext.Provider value={{theme:theme}}>
        <Outlet />
        </modeDataContext.Provider>
        </>
    )
}
export default Layout;
