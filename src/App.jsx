import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Academics from "./components/Academics/Academics"; 
import Clubs from "./components/Clubs/Clubs";
import Department from "./components/Deparments/Departments";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About /> 
      <Academics />
      <Department />
      <Clubs />
    </>
  );
}

export default App;