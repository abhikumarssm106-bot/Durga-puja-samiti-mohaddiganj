import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Schedule from './pages/Schedule/Schedule';
import Gallery from './pages/Gallery/Gallery';
import About from './pages/About/About';
import Venue from './pages/Venue/Venue';
import Contact from './pages/Contact/Contact';
import Announcements from './pages/Announcements/Announcements';

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="schedule">
        <Schedule />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="venue">
        <Venue />
      </div>
      <div id="announcements">
        <Announcements />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
