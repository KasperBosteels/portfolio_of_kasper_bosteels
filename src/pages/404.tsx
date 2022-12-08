import { NavLink } from "react-router-dom";


const ErrorPage = ()=>{
    return(
        <>
        <h1>404</h1>
        <p>This page was not found.</p>
        <NavLink to="/">go to the homepage</NavLink>
        </>
    )
}
export default ErrorPage;