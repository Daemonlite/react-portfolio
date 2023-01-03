import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Social from "./components/social";
import About from "./components/About";
import Experience from "./components/Experiece";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      
  <Navbar/>
  <Home />
<About/>
<Experience/>
<Portfolio/>
<Contact/>

  <Social/>
    </div>
  );
}

export default App;
