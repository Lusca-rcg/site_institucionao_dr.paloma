import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Diferenciais from './components/Diferenciais';
import Tratamentos from './components/Tratamentos';
import ComoFunciona from './components/ComoFunciona';
import SobreDra from './components/SobreDra';
import BeforeAfter from './components/BeforeAfter';
import Depoimentos from './components/Depoimentos';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Diferenciais />
        <Tratamentos />
        <ComoFunciona />
        <SobreDra />
        <BeforeAfter />
        <Depoimentos />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
