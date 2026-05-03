import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Globe } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import Footer from '../components/Footer';

interface ProjectBlock {
  id: number;
  type: string;
  title: string;
  img: string;
  side: string;
  desc?: string;
}

const InternationalProjects: React.FC = () => {
  const blocks: ProjectBlock[] = [
    { 
      id: 1, 
      type: 'workshop', 
      title: "Workshop “Blue Economy and Partnership”", 
      img: "/img/blue_gates.jpg", 
      side: "left" 
    },
    { 
      id: 2, 
      type: 'cbs',
      title: "Зустріч Center of Excellence (Копенгаген)", 
      img: "/img/kopeng.jpg", 
      side: "right",
      desc: "4-17 серпня 2025 року відбулася чергова зустріч у межах проєкту Center of Excellence..." 
    },
{ 
  id: 3, 
  type: 'bulgaria',
  title: "Міжнародне стажування: Болгарія", 
  img: "/img/bulgaria_study.png",
  side: "left",
  desc: `21 жовтня 2025 року стартувала 5-денна літня програма навчання в рамках міжнародного проєкту. 
  Власні дослідження презентували представники болгарської сторони, а саме Burgas Free University.
  У межах літньої школи Blue Gates у Бургасі відбулася партнерська зустріч:
  - Декарбонізація морської галузі та спільне розміщення ВДЕ.
  - Стан блакитної економіки в Болгарії та Румунії: огляд і виклики.
  - Практики «зеленої» верфі: матеріали, енергоефективність, екологічність.
  Такі проекти сприяють розвитку свідомого відношення до оточуючого середовища.`
}


  ];


  const getContent = (block: ProjectBlock) => {
    switch (block.type) {
      case 'workshop':
        return (
          <>
            <p className="mb-6 text-justify">
              12 листопада відбувся Workshop “Blue Economy and Partnership for Sustainable Development of Ukraine’s Maritime Sector”. Захід зібрав провідних експертів для обговорення стратегічних рішень у сфері блакитної економіки.
            </p>
            <div className="bg-white/5 p-5 rounded-2xl mb-8 border border-white/10 text-sm">
              <p className="font-bold text-yellow-400 mb-4 uppercase tracking-widest text-[10px]">Доповіді:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li><span className="text-yellow-400 mr-2">•</span><strong>Н. Хотєєва:</strong> transformations under energy transition</li>
                <li><span className="text-yellow-400 mr-2">•</span><strong>М. Матвієнко:</strong> Blue education & Tourism Lab</li>
                <li><span className="text-yellow-400 mr-2">•</span><strong>А. Лупашко:</strong> Digital ports and green corridors</li>
                <li><span className="text-yellow-400 mr-2">•</span><strong>О. Смаженко:</strong> Marine pollution strategies</li>
              </ul>
            </div>
            <p className="font-bold text-white mb-3 italic">Таблиця 1. Міжнародні проєкти</p>
            <div className="overflow-x-auto border border-white/10 rounded-xl">
              <table className="w-full text-[10px] md:text-xs text-left">
                <thead className="bg-white/10 text-yellow-400">
                  <tr>
                    <th className="p-3">Рік</th>
                    <th className="p-3">Проєкт</th>
                    <th className="p-3">Роль</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="p-3">2024</td>
                    <td className="p-3 font-bold text-white">Blue Gates</td>
                    <td className="p-3">Навчальні заходи</td>
                  </tr>
                  <tr className="bg-white/[0.02]">
                    <td className="p-3">2025</td>
                    <td className="p-3 font-bold text-white">Summer School</td>
                    <td className="p-3">Літня програма</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        );

case 'bulgaria':
  return (
    <>
      <p className="mb-6">{block.desc}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <img 
          src="/img/bulgaria1.png" 
          className="rounded-xl border border-white/10 shadow-lg w-full h-72 object-cover" 
          alt="Стажування 2"/>
        <img 
          src="/img/bulgaria.png" 
          className="rounded-xl border border-white/10 shadow-lg w-full h-72 object-cover" 
          alt="Стажування 3"/>
      </div>
    </>
  );

case 'cbs':
  return (
    <>
      <p className="mb-4">{block.desc}</p>
      <div className="mb-6">
        <img 
          src="/img/kopeng1.png" 
          className="rounded-xl border border-white/10 shadow-2xl max-w-full h-auto" 
          alt="Center of Excellence" 
        />
      </div>      
      <ul className="text-sm space-y-1 italic text-yellow-400 font-medium">
        <li>• Ірина Савельєва — “Blue Resistance”</li>
        <li>• Марина Матвієнко — “Decarbonization”</li>
      </ul>
    </>
  );

      default:
        return <p>{block.desc}</p>;
    }
  };
  return (
    <div className="min-h-screen flex flex-col bg-[#0a192f] text-white">
      <div className="relative z-10 flex-grow">
        <header className="pt-20 pb-10 px-6 max-w-7xl mx-auto w-full">
          <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8 group">
            <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
            Назад
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-500/20 rounded-2xl border border-blue-500/30">
              <Globe className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">
              Міжнародні <span className="text-blue-500">Проєкти</span>
            </h1>
          </div>
        </header>
        <main className="px-6 pb-20 max-w-7xl mx-auto w-full">
          <FadeIn>
            <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl">
              {blocks.map((block) => (
                <section key={block.id} className="clear-both overflow-hidden mb-20 last:mb-0 border-b border-white/5 pb-16 last:border-0">
                  <img 
                    src={block.img} 
                    alt={block.title}
                    className={`w-full md:w-96 h-64 object-cover rounded-2xl border border-white/10 shadow-2xl mb-8 
                      ${block.side === 'left' ? 'md:float-left md:mr-12' : 'md:float-right md:ml-12'}`}
                  />
                  <h2 className="text-2xl font-black mb-6 uppercase italic tracking-tight text-white">
                    {block.title}
                  </h2>
                  <div className="text-white/80 text-lg font-light leading-relaxed">
                    {getContent(block)}
                  </div>
                </section>
              ))}
            </div>
          </FadeIn>
        </main>
      </div>
      <div className="relative z-20 w-full bg-[#0a192f] border-t border-white/5">
        <Footer />
      </div>
    </div>
  );
};

export default InternationalProjects;





