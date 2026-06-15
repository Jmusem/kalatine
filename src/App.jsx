import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Academics from "./components/Academics/Academics"; 
import Clubs from "./components/Clubs/Clubs";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About /> 
      <Academics />
      <Clubs />
    </>
  );
}

export default App;