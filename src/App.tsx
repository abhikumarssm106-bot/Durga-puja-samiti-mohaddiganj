import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

// Lazy load all below-fold sections — they won't block initial render
const About = lazy(() => import('./pages/About/About'));
const Schedule = lazy(() => import('./pages/Schedule/Schedule'));
const Gallery = lazy(() => import('./pages/Gallery/Gallery'));
const Venue = lazy(() => import('./pages/Venue/Venue'));
const Announcements = lazy(() => import('./pages/Announcements/Announcements'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

// Lightweight section placeholder while lazy component loads
const SectionFallback = ({ height = '400px' }: { height?: string }) => (
  <div
    style={{ minHeight: height }}
    className="w-full bg-surface-container-low animate-pulse"
  />
);

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <div id="home">
        {/* Hero is above the fold — load eagerly */}
        <Hero />
      </div>
      <div id="about">
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
      </div>
      <div id="schedule">
        <Suspense fallback={<SectionFallback />}>
          <Schedule />
        </Suspense>
      </div>
      <div id="gallery">
        <Suspense fallback={<SectionFallback height="500px" />}>
          <Gallery />
        </Suspense>
      </div>
      <div id="venue">
        <Suspense fallback={<SectionFallback />}>
          <Venue />
        </Suspense>
      </div>
      <div id="announcements">
        <Suspense fallback={<SectionFallback />}>
          <Announcements />
        </Suspense>
      </div>
      <div id="contact">
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
