import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import { SkillIcons } from "./Components/Skills/Skills.jsx";


const App = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
      <About/>
      <SkillIcons/>
    </div>
  )
}

export default App;