import Hero from "./Hero";
import Skills from "./Skills";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {

  return (
    <div className="background-texture">
      <div className="page-wrapper">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
    </div>
    
  )
}

export default App
