import './App.css';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Home from './components/home/Home';
import About from './components/about/About';
import Qualification from './components/qualification/Qualification';
function App() {
  return (
    <>  
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
        <Contact/>
        <Footer/>
      </main>

    </>
  );
}

export default App;
