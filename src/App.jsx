import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import { SkillIcons } from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
      <About/>
      <Projects/>
      <SkillIcons/>
    </div>
  )
}

export default App;