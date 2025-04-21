// App.js
import './App.css';
import About from './components/about';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Packages from './components/Packages';
import Booking from './components/Booking';
import Footer from './components/footer';
import Header from './components/header';

function App() {
  return (
    <>
      <Header />
      <div id="about-us"><About /></div>
      <div id="amenities"><Amenities /></div>
      <div id="gallery"><Gallery /></div>
      <div id="packages"><Packages /></div>
      <div id="booking"><Booking /></div>
      <Footer />
    </>
  );
}

export default App;
