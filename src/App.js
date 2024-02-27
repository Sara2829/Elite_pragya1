import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from './components/Footer';
// import  Carousel from './components/Carousel';  // Corrected import syntax
import Slider from "./components/Slider";
// import { Skills } from './components/Skills';
import Description from './components/Description';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      {/* <Carousel/> */}
   
      <Projects />
      {/* <Carousel/> */}
{/* <Skills/> */}
      <Slider />
      <Description/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
