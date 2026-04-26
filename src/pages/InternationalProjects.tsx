import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Globe } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import Footer from '../components/Footer';

const InternationalProjects: React.FC = () => {
  // Данные для 7 блоков (замени пути к фото на свои)
  const blocks = [
    { id: 1, title: "Розвиток морської галузі України", img: "/img/savelyeva.jpg", side: "left" },
    { id: 2, title: "Міжнародний форум SDG 2024", img: "/img/sdg_forum.png", side: "right" },
    { id: 3, title: "Фінал SeaFocus International", img: "/img/seafocus.jpg", side: "left" },
    { id: 4, title: "Center of Excellence ОНМУ-CBS", img: "/img/cbs_meeting.png", side: "right" },
    { id: 5, title: "Проєкт Blue Gates", img: "/img/blue_gates.jpg", side: "left" },
    { id: 6, title: "Міжнародні стажування Erasmus+", img: "/img/erasmus.png", side: "right" },
    { id: 7, title: "Партнерство з морською індустрією", img: "/img/partnership.jpg", side: "left" },
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col">
      
      {/* 1. ФОН: Фиксируем, чтобы он не влиял на поток элементов */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
          src="/back/business.jpg" 
          alt="Background" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
      </div>

      {/* 2. КОНТЕНТНАЯ ОБЛАСТЬ: flex-grow заставляет её занимать всё свободное место */}
      <div className="relative z-10 flex-grow pt-32 md:pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <Link 
            to="/" 
            className="inline-flex items-center text-yellow-400 hover:text-white mb-10 transition-colors uppercase text-[10px] font-bold tracking-widest"
          >
            <ChevronLeft size={14} className="mr-1" />
            Назад на головну
          </Link>

          <header className="flex flex-col items-center mb-16 text-center">
            <div className="flex items-center gap-1.5 mb-2 text-yellow-400 uppercase tracking-[0.3em] text-[10px] font-bold">
              <Globe size={14} /> Global Partnership
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
              Міжнародні проєкти
            </h1>
            <div className="h-1 w-20 bg-yellow-400 mt-6 rounded-full"></div>
          </header>

          <main className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="bg-white/5 backdrop-blur-3xl p-8 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl space-y-24">
                
                {blocks.map((block) => (
                  <section key={block.id} className="clear-both overflow-hidden">
                    <img 
                      src={block.img} 
                      alt={block.title}
                      className={`w-full md:w-80 rounded-2xl border border-white/10 shadow-2xl mb-6 
                        ${block.side === 'left' ? 'md:float-left md:mr-10' : 'md:float-right md:ml-10'}`}
                    />
                    <h2 className={`text-2xl font-black text-white uppercase italic mb-4 ${block.side === 'right' ? 'md:text-right' : ''}`}>
                      {block.title}
                    </h2>
                    <p className={`text-white/80 text-lg font-light leading-relaxed text-justify ${block.side === 'right' ? 'md:text-right' : ''}`}>
                      Опис проєкту №{block.id}. Тут ви можете детально розповісти про участь викладачів та студентів кафедри у міжнародних ініціативах. Текст буде обтікати зображення згідно з вибраним напрямком.
                    </p>
                  </section>
                ))}

              </div>
            </FadeIn>
          </main>
        </div>
     </div>

      {/* 3. ФУТЕР: Теперь он стоит в конце flex-контейнера */}
      <div className="relative z-20 w-full mt-auto bg-[#0a192f]">
        <Footer />
      </div>
</div>
    
  );
};

export default InternationalProjects;




