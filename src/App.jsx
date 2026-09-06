import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Facility from './components/Facility';
import Services from './components/Services';
import Quality from './components/Quality';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-graphite-950 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Facility />
        <Services />
        <Quality />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
