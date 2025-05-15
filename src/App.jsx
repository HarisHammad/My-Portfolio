import { Route ,Routes,BrowserRouter } from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import Nav from "./Nav"
import Project from "./Project"
import Project2 from "./Project2"
import Skills from "./Skills"
function App() {
  return (
    <>
<BrowserRouter>
<Nav />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/skills" element={<Skills />} />
<Route path="/project" element={<Project />} />
<Route path="/project2" element={<Project2 />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
