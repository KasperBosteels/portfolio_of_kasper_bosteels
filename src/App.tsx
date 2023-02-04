import Homepage from "./pages/Home"
import Componenten from "./pages/Components";
import Contact from "./pages/Contact";
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from "./pages/Layout";
import useLocalStorage from "use-local-storage";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material";
import ShowRoom from "./pages/showRoom";
import "./App.css";
import ErrorPage from "./pages/404";
import Blog from "./pages/Blog";
import About from "./pages/About_Stage_Robonext";

const customtheme = createTheme({
  palette: {
    mode:"light",
    primary: {
      dark:'#212121',
      light: '#C8E6C9',
      main:"#4CAF50",
      contrastText:"#212121"
    },
    secondary:{
      main:"#607D8B",
      contrastText:"#757575"
    },
    divider:"#BDBDBD"
  },
});

const customDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      dark:'#D32F2F',
      light: '#FFCDD2',
      main:"#F44336",
      contrastText:"#FFFFFF"
    },
    secondary:{
      main:"#9E9E9E",
      contrastText:"#757575"
    },
    divider:"#BDBDBD"
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
        },{
          path:"Blog",
          element:<Blog/>
        },{
          path:"About",
          element:<About/>
        },{
          path:"*",
          element:<ErrorPage/>
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
