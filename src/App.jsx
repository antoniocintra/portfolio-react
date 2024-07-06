import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import { SkillIcons } from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
      <About/>
      <Projects/>
      <SkillIcons/>
      <Footer/>
    </div>
  )
}

export default App;