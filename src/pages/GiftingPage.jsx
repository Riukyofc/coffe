import { Sparkles } from 'lucide-react';

const GiftingPage = () => (
  <div className="pt-32 pb-24 min-h-screen bg-[#121212] animate-fade-in">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-[#1a1a1a] border border-zinc-800 p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center rounded-sm">
        <div className="w-full md:w-1/2 relative">
           <img src="https://images.unsplash.com/photo-1608354580875-30bd4168b351?q=80&w=800&auto=format&fit=crop" className="w-full h-[500px] object-cover shadow-2xl" alt="Gift Box" />
           <div className="absolute -bottom-6 -right-6 bg-[#C5A059] text-black p-6 rounded-sm shadow-xl hidden md:block">
             <p className="font-serif text-2xl">The Connoisseur <br/>Set</p>
           </div>
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-[#C5A059] text-xs font-medium tracking-[0.2em] uppercase">Corporate & Personal Gifting</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white">Give the Gift of Aura.</h1>
          <p className="text-zinc-400 font-light text-lg">Caixas de presente luxuosas personalizadas, contendo as nossas torras mais exclusivas e equipamentos de extração premium. A experiência perfeita para os amantes de café.</p>
          <ul className="text-zinc-300 font-light space-y-3 py-4">
             <li className="flex gap-3 items-center"><Sparkles size={16} className="text-[#C5A059]"/> Embalagem Matte Black & Gold Foil</li>
             <li className="flex gap-3 items-center"><Sparkles size={16} className="text-[#C5A059]"/> Cartão de mensagem personalizado</li>
             <li className="flex gap-3 items-center"><Sparkles size={16} className="text-[#C5A059]"/> Opções para Empresas</li>
          </ul>
          <button className="bg-[#C5A059] text-black px-8 py-4 font-bold text-xs tracking-widest uppercase hover:bg-white transition-colors w-full md:w-auto">
            Build a Gift Box
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default GiftingPage;
