const OurStoryPage = () => (
  <div className="pt-32 pb-24 min-h-screen bg-[#121212] animate-fade-in">
    <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
      <p className="text-[#C5A059] text-xs font-medium tracking-[0.2em] uppercase">The Origins</p>
      <h1 className="font-serif text-5xl md:text-7xl text-white mb-12">Born in the Shadows.</h1>
      <div className="aspect-video w-full overflow-hidden rounded-sm mb-16 relative">
        <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1200&auto=format&fit=crop" alt="Coffee Farm" className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
      </div>
      <div className="space-y-6 text-zinc-400 font-light text-lg leading-relaxed text-left md:text-center max-w-3xl mx-auto">
        <p>A Nocturne Reserve não é apenas café. É o culminar de gerações dedicadas à arte obscura da torra perfeita. Viajamos para as altitudes mais remotas, onde o ar rarefeito e o solo vulcânico dão origem a grãos com uma complexidade incomparável.</p>
        <p>Acreditamos que os melhores sabores são forjados no escuro. As nossas técnicas de torra lenta extraem os óleos essenciais mais ricos, preservando a integridade de cada origem e entregando uma chávena que é, em simultâneo, ousada e misteriosamente suave.</p>
      </div>
    </div>
  </div>
);

export default OurStoryPage;
