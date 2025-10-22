import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Platforms from './components/Platforms';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Platforms />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
