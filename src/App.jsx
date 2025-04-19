import { Route ,Routes,BrowserRouter } from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import Nav from "./Nav"
import Project from "./project"
import Skills from "./Skills"
function App() {
  return (
    <>
<BrowserRouter>
<Nav />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/contact" element={<Contact />} />
<Route path="/project" element={<Project />} />
<Route path="/skills" element={<Skills />} />
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
