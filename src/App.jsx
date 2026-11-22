import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import TunnelTransition from './components/TunnelTransition.jsx';
import About from './components/About.jsx';
import WhyMe from './components/WhyMe.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import BeyondCode from './components/BeyondCode.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="app">
      <div className="app-grain" aria-hidden="true" />
      <Navbar />

      <main>
        <Hero />
        <TunnelTransition />
        <About />
        <WhyMe />
        <Skills />
        <Projects />
        <Education />
        <BeyondCode />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p className="footer-brand">
            GOURI <em>Tiwari</em> — Beyond the Obvious.
          </p>
          <p className="footer-note">
            Software Engineering | AI/ML | Intelligent Systems · IIST, Indore
          </p>
        </div>
      </footer>
    </div>
  );
}
