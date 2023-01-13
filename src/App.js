import './App.css';
import Background from "./Components/Background.jsx"
import Navbar from "./Components/Navbar.jsx"
import Introduction from "./Components/Introduction.jsx"
import About from "./Components/About.jsx"
import Projects from "./Components/Projects.jsx"
import Experience from "./Components/Experience.jsx"
import Contact from "./Components/Contact.jsx"

export default function App() {


  return (
    <div className="min-w-[30rem]">
      {/* <Background /> */}

      <header className="z-50 sticky top-0 w-full">
        <Navbar />
      </header>

      <main className="flex flex-col w-full h-full">
        <Introduction />
        {/* <About />
        <Projects />
        <Experience />
        <Contact /> */}
      </main>

      <div className="mt-[20rem] text-[10rem] text-amber-500 text-center">
        SITE UNDER CONSTRUCTION
      </div>

      <footer className="bg-blue-500 w-full">
      </footer>

    </div>
  );
}
