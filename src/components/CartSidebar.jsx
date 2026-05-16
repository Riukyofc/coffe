import { useContext } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { CartContext } from '../context/CartContext';

const CartSidebar = () => {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal } = useContext(CartContext);

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-[#121212] border-l border-zinc-800 shadow-2xl z-[70] flex flex-col animate-[slideInRight_0.4s_ease-out]">
        
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
          <h2 className="font-serif text-2xl text-white flex items-center gap-2">
            <ShoppingBag size={20} className="text-[#C5A059]" />
            Your Cart
          </h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items list */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-zinc-500 space-y-4">
              <ShoppingBag size={48} strokeWidth={1} />
              <p className="font-light tracking-wide text-sm">Your cart is empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-[#C5A059] uppercase text-xs tracking-widest font-bold border-b border-[#C5A059] pb-1 hover:text-white hover:border-white transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-20 h-24 bg-zinc-900 rounded-sm overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-white font-medium text-sm">{item.title}</h3>
                      <button onClick={() => removeFromCart(item.id)} className="text-zinc-600 hover:text-red-500 transition-colors">
                        <X size={16} />
                      </button>
                    </div>
                    <p className="text-zinc-500 text-xs mt-1">{item.price}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center border border-zinc-800 rounded-sm overflow-hidden">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-xs text-white w-6 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-zinc-800 bg-[#0a0a0a]">
            <div className="flex justify-between text-white mb-6">
              <span className="font-light text-zinc-400 uppercase tracking-widest text-xs">Subtotal</span>
              <span className="font-serif text-xl">R$ {cartTotal.toFixed(2)}</span>
            </div>
            <button 
              className="w-full bg-[#C5A059] text-black py-4 text-xs font-bold tracking-widest uppercase hover:bg-white transition-colors shadow-[0_0_20px_rgba(197,160,89,0.2)]"
            >
              Checkout
            </button>
            <p className="text-center text-zinc-600 text-[10px] mt-4 uppercase tracking-widest">
              Shipping & taxes calculated at checkout
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
