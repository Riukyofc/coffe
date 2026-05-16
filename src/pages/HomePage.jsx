import { ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { ALL_PRODUCTS } from '../data/products';

const HomePage = ({ setPage }) => (
  <div className="animate-fade-in">
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#121212] z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C5A059] rounded-full blur-[150px] opacity-[0.03] z-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20 relative z-10">
        <div className="w-full md:w-1/2 relative group animate-fade-in-up delay-100">
          <div className="absolute inset-0 bg-[#C5A059] blur-3xl opacity-10 rounded-full group-hover:opacity-25 transition-opacity duration-1000" />
          <div className="relative h-[500px] lg:h-[700px] w-full overflow-hidden rounded-sm animate-float">
            <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1200&auto=format&fit=crop" alt="Coffee" className="w-full h-full object-cover object-center scale-[1.02] group-hover:scale-105 transition-transform duration-[2000ms] ease-out shadow-2xl" />
            <div className="absolute inset-0 border border-[#C5A059]/20 m-4 pointer-events-none transition-all duration-700 group-hover:m-6" />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8 mt-12 md:mt-0">
          <p className="animate-fade-in-up delay-100 text-[#C5A059] text-xs md:text-sm font-medium tracking-[0.2em] uppercase flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#C5A059]"></span> A Essência da Noite
          </p>
          <h1 className="animate-fade-in-up delay-200 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white">
            AWAKEN TO THE <br /><span className="italic text-zinc-300">LUXURY</span> OF DARK.
          </h1>
          <p className="animate-fade-in-up delay-300 text-zinc-400 text-base md:text-lg max-w-md leading-relaxed font-light">
            Descubra a harmonia perfeita entre grãos raros e torra artesanal. Uma experiência sensorial desenhada para paladares exigentes.
          </p>
          <div className="pt-4 animate-fade-in-up delay-400">
            <button onClick={() => setPage('collections')} className="relative overflow-hidden bg-[#C5A059] text-[#121212] px-8 py-4 font-medium text-sm tracking-widest uppercase transition-all duration-500 flex items-center gap-3 w-fit group hover:shadow-[0_0_25px_rgba(197,160,89,0.4)]">
              <span className="relative z-10 flex items-center gap-3">EXPLORE THE COLLECTIONS <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" /></span>
              <div className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 px-6 bg-[#0a0a0a] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24 space-y-4 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl text-white">Shop Our Signatures</h2>
          <p className="text-zinc-500 font-light tracking-wide max-w-xl mx-auto">A nossa seleção premium de torras, cuidadosamente preparadas.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {ALL_PRODUCTS.slice(0, 3).map((product, idx) => <ProductCard key={product.id} product={product} index={idx} />)}
        </div>
        <div className="mt-24 text-center animate-fade-in-up delay-300">
          <button onClick={() => setPage('shop-all')} className="group relative text-[#C5A059] uppercase tracking-widest text-sm font-medium hover:text-white transition-colors duration-300 pb-2">
            View All Coffees
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-[#C5A059] group-hover:w-full group-hover:bg-white transition-all duration-500" />
          </button>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;
