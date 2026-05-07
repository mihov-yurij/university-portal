import React from 'react';
import { Rocket, Ship, ChartColumn, CheckCircle2, Anchor, MapPin, ArrowRight, MessageCircle } from 'lucide-react';

const Gate: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-[#0f172a] overflow-x-hidden">
      <main className="w-full max-w-[1200px] mx-auto px-4 py-6 sm:px-6 lg:py-12">
        
        {/* Header: Используем гибкий flex вместо фиксированных размеров */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-16">
          <div className="w-full sm:w-auto transform transition-all">
            <div className="bg-[#eab308] text-[#1e293b] font-black text-lg sm:text-3xl px-5 py-4 sm:px-10 sm:py-6 rounded-2xl shadow-xl uppercase tracking-tight inline-flex items-center justify-center gap-3 leading-tight">
              <span>Плануєш вступ 2026?</span>
              <Rocket className="w-6 h-6 sm:w-10 sm:h-10 shrink-0" />
            </div>
          </div>
          
          <h1 className="mt-6 text-xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight max-w-[90%]">
            Лови головні цифри для старту! 📊
          </h1>
          <p className="mt-3 text-slate-600 dark:text-slate-400 italic text-sm sm:text-lg max-w-[85%]">
            «Вибір професії — це не лише про мрії, а й про стратегію!»
          </p>
        </div>

        {/* Main Card: Убираем жесткие отступы p-12 на мобилках */}
        <div className="w-full bg-white dark:bg-slate-900/50 backdrop-blur-sm rounded-[2rem] border border-slate-200 dark:border-slate-800 p-5 sm:p-10 lg:p-14 shadow-2xl">
          
          {/* Intro Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
            <div className="text-center lg:text-left space-y-4">
              <h2 className="text-lg sm:text-2xl font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                Одеський національний морський університет
              </h2>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-lg">
                Відкриваємо двері для майбутніх лідерів!
              </p>
            </div>
            
            {/* Scores: Переход из flex-row в flex-col на мобилках */}
            <div className="bg-slate-900 dark:bg-slate-950 text-white rounded-2xl p-6 flex flex-col sm:flex-row justify-around items-center gap-6 sm:gap-4 border border-slate-800">
              <div className="text-center w-full sm:w-auto">
                <p className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase mb-1">Бюджет</p>
                <div className="text-2xl sm:text-4xl font-black italic text-green-400 flex items-center justify-center gap-2">
                  <CheckCircle2 size={18} /> від 130
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-slate-800"></div>
              <div className="text-center w-full sm:w-auto pt-4 sm:pt-0 border-t border-slate-800 sm:border-t-0">
                <p className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase mb-1">Контракт</p>
                <div className="text-2xl sm:text-4xl font-black italic text-blue-400 flex items-center justify-center gap-2">
                  <CheckCircle2 size={18} /> від 100
                </div>
              </div>
            </div>
          </div>

          {/* Specialties: Сетка 1 на мобилках, 2 на десктопе */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10">
            {[
              { icon: <Ship />, title: "ОП «Морський бізнес»", spec: "073", desc: "Логістика та морські процеси." },
              { icon: <ChartColumn />, title: "Маркетинг і аналітика", spec: "075", desc: "Дані та креатив на ринку." }
            ].map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex gap-4 items-start">
                <div className="text-blue-500 shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg leading-tight">{item.title}</h3>
                  <p className="text-[10px] font-mono text-blue-500 mb-1">Спеціальність {item.spec}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="text-center border-t border-slate-100 dark:border-slate-800 pt-8">
            <h3 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white mb-6 uppercase italic flex flex-wrap justify-center gap-2 px-2">
              Будь кращим! <span className="text-blue-600">Обирай ОНМУ!</span> <Anchor className="hidden sm:inline animate-bounce" />
            </h3>
            
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg flex items-center justify-center gap-3 mx-auto active:scale-95 transition-all">
              <MessageCircle size={20} />
              <span className="text-sm sm:text-base">Маєш питання? Пиши нам</span>
              <ArrowRight size={18} />
            </button>
            
            <div className="mt-6 flex items-center justify-center gap-2 text-slate-500 text-[10px] uppercase font-bold tracking-widest">
              <MapPin size={12} className="text-red-500" />
              Приймальна комісія ОНМУ
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Gate;


