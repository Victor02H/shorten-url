import Header from './components/Header';
import Home from './components/HomeContent';
import Details from './components/Details';
import CallToAction from './components/CallToAction';
import Newsletter from './components/newsletter';
import Footer from './components/Footer';

import Routes from './routes';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Details />
      <Newsletter />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
