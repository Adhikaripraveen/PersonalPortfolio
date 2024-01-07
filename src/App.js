import { Home } from "./Components/Home";
import Skills from "./Components/Skills";
import { Project } from "./Components/Project";
import Education from "./Components/Education";
import { Header } from "./Components/Header";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Skills />
      <Project />
      <Education />
      <Contact />
    </div>
  );
};

export default App;
