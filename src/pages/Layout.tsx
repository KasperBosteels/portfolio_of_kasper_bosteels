import {Outlet} from "react-router-dom"
import React from "react"
import { CssBaseline,  } from "@mui/material";
import NavigationBar from "../components/Menu";
export interface mode {
    theme:boolean;
    toggle:()=>void;
}
export interface modeContext {
    theme:string
}
const Layout = ({theme,toggle}:mode)=>{
    return (
        <>
        <NavigationBar theme={theme ? "dark" : "light"} toggle={toggle}/>
        <CssBaseline/>
        <Outlet/>
        </>
    )
}
export default Layout;
