import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Facility from './components/Facility';
import Quality from './components/Quality';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#06080D' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Facility />
        <Quality />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
