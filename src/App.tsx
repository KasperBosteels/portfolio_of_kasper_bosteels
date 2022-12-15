import Homepage from "./pages/Home"
import Componenten from "./pages/Components";
import Contact from "./pages/Contact";
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from "./pages/Layout";
import useLocalStorage from "use-local-storage";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material";
import ShowRoom from "./pages/showRoom";


const customtheme = createTheme({
  palette: {
    mode:"light",
    primary: {
      main: '#7611d9',
    },
    secondary: {
      main: '#75d911',
    },
  },
});

const customDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2b0451',
    },
    secondary: {
      main: '#2a5104',
    },
  },
});



function App() {
  const [theme,setTheme] = useLocalStorage<boolean>("dark-mode",false);

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
          element:<Componenten/>,
        },{
          path:"Components/:id",
          element:<ShowRoom/>
        }
       
      ],
    }
  ])
  const mode = theme ? customDarkTheme : customtheme
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
