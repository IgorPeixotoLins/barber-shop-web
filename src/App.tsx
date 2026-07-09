import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import GlobalStyle from './styles/GlobalStyle';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;