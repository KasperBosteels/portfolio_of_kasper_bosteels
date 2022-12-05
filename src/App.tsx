import Homepage from "./pages/Home"
import Componenten from "./pages/Components";
import Contact from "./pages/Contact";
import About from "./pages/About"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./pages/Layout";
function App() {

  return (
<BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Homepage/>}/>
      <Route path="Contact" element={<Contact/>}/>
      <Route path="Components" element={<Componenten/>}/>
      <Route path="About" element={<About/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
