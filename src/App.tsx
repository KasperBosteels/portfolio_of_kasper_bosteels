import Homepage from "./pages/Home"
import Componenten from "./pages/Components";
import Contact from "./pages/Contact";
import About from "./pages/About"
import ErrorPage from "./pages/404";
import {BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from "./pages/Layout";
import useLocalStorage from "use-local-storage";

function App() {
  const [theme,setTheme] = useLocalStorage('theme' ? 'dark' : 'light',"light");
   
  const toggle = () =>{
   const newTheme = theme === "light" ? "dark" : "light";
   setTheme(newTheme);
  }
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout theme={theme} toggle={toggle}/>,
      children:[
        {
          path:"",
          element: <Homepage />
        },
        {
          path: "Contact",
          element: <Contact/>
        },
        {
          path:"Components",
          element:<Componenten/>
        },
        {
          path:"About",
          element:<About/>
        }
      ],
    }
  ])
  return (
<>
    <RouterProvider router={router}/>
</>
    
  );
}

export default App;
