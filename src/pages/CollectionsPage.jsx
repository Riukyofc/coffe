import { ChevronRight } from 'lucide-react';

const CollectionsPage = () => (
  <div className="pt-32 pb-24 min-h-screen bg-[#121212] animate-fade-in">
    <div className="max-w-7xl mx-auto px-6 space-y-24">
      <div className="text-center space-y-4 mb-12">
        <h1 className="font-serif text-5xl text-white">Curated Collections</h1>
        <p className="text-zinc-500 font-light">Séries limitadas desenhadas para momentos específicos.</p>
      </div>

      {/* Collection 1 */}
      <div className="flex flex-col md:flex-row gap-12 items-center group">
        <div className="w-full md:w-1/2 h-[400px] overflow-hidden rounded-sm relative">
          <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Midnight Series" />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="font-serif text-4xl text-white">The Midnight Series</h2>
          <p className="text-zinc-400 font-light leading-relaxed">Torras profundamente escuras, com notas intensas de cacau, fumo e especiarias. Ideal para as horas mais tardias e contemplativas.</p>
          <button className="flex items-center gap-2 text-[#C5A059] uppercase tracking-widest text-sm font-medium hover:text-white transition-colors">
            Explore Series <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Collection 2 */}
      <div className="flex flex-col md:flex-row-reverse gap-12 items-center group">
        <div className="w-full md:w-1/2 h-[400px] overflow-hidden rounded-sm relative">
          <img src="https://images.unsplash.com/photo-1495474472201-411db18f1e07?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Dawn Reserve" />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="font-serif text-4xl text-white">The Dawn Reserve</h2>
          <p className="text-zinc-400 font-light leading-relaxed">Torras claras e brilhantes de origens únicas africanas. Notas florais e frutadas desenhadas para despertar os sentidos com elegância.</p>
          <button className="flex items-center gap-2 text-[#C5A059] uppercase tracking-widest text-sm font-medium hover:text-white transition-colors">
            Explore Series <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default CollectionsPage;
