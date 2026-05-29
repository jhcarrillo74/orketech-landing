import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Problema from './sections/Problema';
import ComoFunciona from './sections/ComoFunciona';
import PorQueYo from './sections/PorQueYo';
import Servicios from './sections/Servicios';
import CasosUso from './sections/CasosUso';

function App() {
  return (
    <div className="min-h-screen bg-light font-inter">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Problema />
        <ComoFunciona />
        <PorQueYo />
        <Servicios />
        <CasosUso />
      </main>
    </div>
  );
}

export default App;
