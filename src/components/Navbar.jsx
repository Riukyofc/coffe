import { Search, ShoppingBag, User, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'our-story', label: 'Our Story' },
    { id: 'shop-all', label: 'Shop All' },
    { id: 'collections', label: 'Collections' },
    { id: 'brewing', label: 'Brewing' },
    { id: 'gifting', label: 'Gifting' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled || currentPage !== 'home' 
        ? 'bg-[#121212]/95 backdrop-blur-md border-b border-zinc-800 py-4 shadow-2xl' 
        : 'bg-transparent py-6 border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => setCurrentPage('home')} className="font-serif text-2xl tracking-wide text-white hover:text-[#C5A059] transition-colors duration-300 flex items-center gap-2">
          <Sparkles size={18} className="text-[#C5A059]" />
          Nocturne Reserve
        </button>

        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((item) => (
            <button 
              key={item.id} 
              onClick={() => setCurrentPage(item.id)}
              className={`nav-link text-sm font-light tracking-widest uppercase transition-colors duration-300 ${currentPage === item.id ? 'active text-white' : 'text-zinc-300 hover:text-white'}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <button className="text-zinc-300 hover:text-[#C5A059] transition-transform duration-300 hover:scale-110">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="text-zinc-300 hover:text-[#C5A059] transition-transform duration-300 hover:scale-110">
            <User size={20} strokeWidth={1.5} />
          </button>
          <button className="text-[#C5A059] hover:text-[#d4b06a] transition-all duration-300 relative flex items-center gap-2 group hover:scale-105">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="hidden sm:block text-xs font-medium tracking-widest uppercase">Cart</span>
            <span className="absolute -top-2 -right-2 bg-[#C5A059] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">0</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
