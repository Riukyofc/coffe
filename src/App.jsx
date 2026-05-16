import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import OurStoryPage from './pages/OurStoryPage';
import ShopAllPage from './pages/ShopAllPage';
import CollectionsPage from './pages/CollectionsPage';
import BrewingPage from './pages/BrewingPage';
import GiftingPage from './pages/GiftingPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top when changing pages
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'our-story': return <OurStoryPage />;
      case 'shop-all': return <ShopAllPage />;
      case 'collections': return <CollectionsPage />;
      case 'brewing': return <BrewingPage />;
      case 'gifting': return <GiftingPage />;
      case 'home':
      default: return <HomePage setPage={setCurrentPage} />;
    }
  };

  return (
    <>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
};

export default App;
