import Homepage from "./pages/Home"
import Componenten from "./pages/Components";
import Contact from "./pages/Contact";
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from "./pages/Layout";
import useLocalStorage from "use-local-storage";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";


export const light = {
  palette: {
    mode:'light',
  },
}
export const dark = {
  palette: {
    mode:"dark",
  },
} 

function App() {
  const [theme,setTheme] = useState<boolean>(false);

  const toggle = () =>{
   setTheme(!theme);
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
       
      ],
    }
  ])
  const mode = createTheme({
    palette:{
      mode: theme ? "dark" : "light"
    }
  })
  return (
<>
    <ThemeProvider theme={mode}>
    <CssBaseline/>
    <RouterProvider router={router}/>
    </ThemeProvider>
</>
    
  );
}

export default App;
