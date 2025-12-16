import { Navbar, Footer } from '@/components/layout';
import {
  Hero,
  TechStack,
  Services,
  Works,
  Contact,
} from '@/components/sections';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Services />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
