import { FileText, Download, GraduationCap, Award, ShieldCheck } from 'lucide-react';


const DOCUMENTS = [
  {
    id: 1,
    title: "Навчальний план 2025 (Денна)",
    desc: "ОПП «Морський бізнес», бакалавр",
    url: "https://onmu.org.ua",
    tag: "Денна форма"
  },
  {
    id: 2,
    title: "Навчальний план 2025 (Заочна)",
    desc: "ОПП «Морський бізнес», бакалавр",
    url: "https://onmu.org.ua",
    tag: "Заочна форма"
  },
  
];

export default function Admission() {
  return (
    <div className="maritime-bg min-h-screen">
      {/* Шапка страницы */}
      <section className="bg-[#1a2c3d] text-white py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 bg-yellow-500 text-[#1a2c3d] px-4 py-1 rounded-full text-[10px] font-black uppercase mb-6 shadow-lg">
            <ShieldCheck size={14} /> Офіційні програми 2025
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 leading-[0.9]">
            Освітня програма <br />
            <span className="text-yellow-400 italic">«Морський бізнес»</span>
          </h1>
          <p className="text-slate-400 text-lg font-medium max-w-2xl italic">
            Спеціальність 073 Менеджмент • Галузь знань 07 Бізнес, адміністрування та право
          </p>
        </div>
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
            <GraduationCap size={400} className="absolute -right-20 -top-20" />
        </div>
      </section>

      {/* Сетка документов */}
      <section className="py-20 container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8">
          {DOCUMENTS.map((doc) => (
            <a
              key={doc.id}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-8 bg-slate-50 border-2 border-slate-100 rounded-[2.5rem] hover:border-yellow-400 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-2xl"
            >
              <div className="flex items-center gap-5">
                <div className="bg-[#1a2c3d] p-5 rounded-[1.5rem] text-yellow-500 group-hover:rotate-6 transition-transform shadow-lg">
                  <FileText size={32} />
                </div>
                <div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-blue-600 mb-1 block">
                    {doc.tag}
                  </span>
                  <h4 className="font-black text-[#1a2c3d] uppercase text-sm tracking-tight leading-tight mb-1">
                    {doc.title}
                  </h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase italic">{doc.desc}</p>
                </div>
              </div>
              
              <div className="bg-white p-3 rounded-full text-slate-300 group-hover:bg-yellow-500 group-hover:text-[#1a2c3d] transition-all shadow-inner">
                <Download size={20} />
              </div>
            </a>
          ))}
        </div>

         <div className="mt-20 p-10 bg-slate-900 rounded-[3.5rem] text-white flex flex-col md:flex-row items-center gap-10 shadow-2xl relative overflow-hidden">
           <div className="md:w-2/3 relative z-10">
              <div className="flex items-center gap-3 mb-6 text-yellow-500">
                 <Award size={32} />
                 <h3 className="text-xl font-black uppercase tracking-tighter">Гарантія якості освіти</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed italic">
                Програма акредитована та відповідає міжнародним стандартам підготовки менеджерів для морської індустрії. 
                Наші навчальні плани щорічно оновлюються за участі провідних логістичних компаній України.
              </p>
           </div>
           <div className="md:w-1/3 text-center relative z-10">
              <div className="inline-block p-6 bg-yellow-500 text-[#1a2c3d] rounded-[2rem] transform -rotate-3 hover:rotate-0 transition-transform cursor-default">
                 <p className="text-[10px] font-black uppercase mb-1">Рівень вищої освіти</p>
                 <p className="text-2xl font-black italic tracking-tighter">БАКАЛАВР</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}


