import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Problema from './sections/Problema';
import ComoFunciona from './sections/ComoFunciona';
import PorQueYo from './sections/PorQueYo';

function App() {
  return (
    <div className="min-h-screen bg-light font-inter">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Problema />
        <ComoFunciona />
        <PorQueYo />
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <p className="text-text text-lg">Project base ready</p>
        </div>
      </main>
    </div>
  );
}

export default App;
