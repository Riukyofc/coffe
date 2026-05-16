import { Sparkles } from 'lucide-react';
import { memo } from 'react';

const Footer = memo(({ setCurrentPage }) => (
  <footer className="border-t border-zinc-900 bg-[#050505] py-16 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <button onClick={() => setCurrentPage('home')} className="font-serif text-2xl tracking-wide text-white flex items-center gap-2">
        <Sparkles size={16} className="text-[#C5A059]" />
        Nocturne Reserve
      </button>
      <div className="flex gap-8 text-sm font-light text-zinc-500">
        <a href="#" className="hover:text-[#C5A059] transition-colors">Instagram</a>
        <a href="#" className="hover:text-[#C5A059] transition-colors">Journal</a>
        <a href="#" className="hover:text-[#C5A059] transition-colors">Contact</a>
      </div>
      <p className="text-zinc-700 text-xs tracking-widest uppercase">
        © 2026 Nocturne Reserve. Todos os direitos reservados.
      </p>
    </div>
  </footer>
));

export default Footer;
