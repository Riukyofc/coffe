import ProductCard from '../components/ProductCard';
import { ALL_PRODUCTS } from '../data/products';

const ShopAllPage = () => (
  <div className="pt-32 pb-24 min-h-screen bg-[#0a0a0a] animate-fade-in">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-zinc-900 pb-8">
        <div>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">The Complete Reserve</h1>
          <p className="text-zinc-500 font-light">Explora a nossa coleção completa de torras artesanais.</p>
        </div>
        <div className="text-sm text-zinc-400 mt-6 md:mt-0 flex gap-4 uppercase tracking-widest">
          <span className="text-[#C5A059]">All</span>
          <span className="hover:text-white cursor-pointer transition-colors">Dark</span>
          <span className="hover:text-white cursor-pointer transition-colors">Light</span>
          <span className="hover:text-white cursor-pointer transition-colors">Decaf</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {ALL_PRODUCTS.map((product, idx) => <ProductCard key={product.id} product={product} index={idx} />)}
      </div>
    </div>
  </div>
);

export default ShopAllPage;
