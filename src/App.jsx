import { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import { CartProvider } from './context/CartContext';

// Lazy loading pages for performance optimization
const HomePage = lazy(() => import('./pages/HomePage'));
const OurStoryPage = lazy(() => import('./pages/OurStoryPage'));
const ShopAllPage = lazy(() => import('./pages/ShopAllPage'));
const CollectionsPage = lazy(() => import('./pages/CollectionsPage'));
const BrewingPage = lazy(() => import('./pages/BrewingPage'));
const GiftingPage = lazy(() => import('./pages/GiftingPage'));

// Fallback loader
const PageLoader = () => (
  <div className="min-h-screen bg-[#121212] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-[#C5A059] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

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
    <CartProvider>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <CartSidebar />
      <main>
        <Suspense fallback={<PageLoader />}>
          {renderPage()}
        </Suspense>
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </CartProvider>
  );
};

export default App;
