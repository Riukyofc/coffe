import { ShoppingBag } from 'lucide-react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product, index = 0 }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div 
      style={{ animationDelay: `${index * 100}ms` }}
      className="animate-fade-in-up group cursor-pointer bg-[#121212] p-5 flex flex-col border border-zinc-800 hover:border-[#C5A059]/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_15px_40px_rgba(197,160,89,0.08)] rounded-sm"
    >
      <div className="w-full h-[350px] overflow-hidden bg-zinc-950 mb-6 relative rounded-sm">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img loading="lazy" src={product.image} alt={product.title} className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-[1.5s] ease-out" />
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
          <button 
            onClick={(e) => { e.stopPropagation(); addToCart(product); }}
            className="w-full bg-[#C5A059]/90 backdrop-blur-md text-black py-3 text-xs font-bold tracking-widest uppercase hover:bg-white transition-colors"
          >
            Quick Add
          </button>
        </div>
      </div>
      <div className="flex-grow flex flex-col">
        <h3 className="font-serif text-2xl text-white mb-2 group-hover:text-[#C5A059] transition-colors duration-300">{product.title}</h3>
        <p className="text-sm text-zinc-400 font-light mb-6 flex-grow">{product.subtitle}</p>
        <div className="flex justify-between items-center border-t border-zinc-800/50 pt-4 mt-auto">
          <span className="text-lg font-medium tracking-wide text-white">{product.price}</span>
          <button 
            onClick={(e) => { e.stopPropagation(); addToCart(product); }}
            className="text-zinc-500 group-hover:text-[#C5A059] transition-colors p-2 bg-zinc-900 rounded-full group-hover:bg-zinc-800"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
