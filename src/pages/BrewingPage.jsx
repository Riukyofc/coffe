const BrewingPage = () => (
  <div className="pt-32 pb-24 min-h-screen bg-[#0a0a0a] animate-fade-in">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center space-y-4 mb-20">
        <h1 className="font-serif text-5xl text-white">The Art of Brewing</h1>
        <p className="text-zinc-500 font-light">Guias essenciais para extrair o máximo de cada grão.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Espresso", time: "25-30 Sec", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600" },
          { title: "Pour Over", time: "3-4 Min", img: "https://images.unsplash.com/photo-1495474472201-411db18f1e07?q=80&w=600" },
          { title: "French Press", time: "4-5 Min", img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=600" }
        ].map((method, idx) => (
          <div key={idx} className="bg-[#121212] p-6 border border-zinc-800 hover:border-[#C5A059] transition-colors cursor-pointer group">
            <div className="h-48 overflow-hidden mb-6 relative">
              <img src={method.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={method.title} />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500"></div>
            </div>
            <div className="flex justify-between items-end">
              <h3 className="font-serif text-2xl text-white">{method.title}</h3>
              <span className="text-[#C5A059] text-xs font-mono">{method.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default BrewingPage;
