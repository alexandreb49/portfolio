import GridOverlay from "./components/GridOverlay";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Career from "./components/Career";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RevealObserver from "./components/RevealObserver";

export default function Home() {
  return (
    <>
      <GridOverlay />
      <Nav />
      <Profile />
      <Contact />
      <Career />
      <Education />
      <Projects />
      <Skills />
      <Footer />
      <RevealObserver />
    </>
  );
}
