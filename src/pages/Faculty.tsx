import type { ReactNode } from 'react'; 
import { Mail, Award, BookOpen, Microscope, Globe2, Lightbulb } from 'lucide-react';

interface StaffMember {
  name: string;
  role: string;
  degree: string;
  interests: string[];
  icon: ReactNode; 
  image: string;
  email: string;
}

const staff: StaffMember[] = [
  {
    name: "Наврозова Юлія Олександрівна",
    role: "Завідувачка кафедри",
    degree: "Кандидат економічних наук, доцент",
    interests: ["Цифровізація портів", "Економіка блакитного росту", "Менеджмент"],
    icon: <Globe2 size={20} className="text-blue-500" />,
    image: "/lecturers/navrozova.jpg", 
    email: "navrozova@onmu.edu.ua"
  },
  {
    name: "Савельєва Ірина Владиславівна",
    role: "Професор кафедри",
    degree: "Доктор економічних наук, професор",
    interests: ["Зелена логістика", "Сталий розвиток", "Міжнародний маркетинг"],
    icon: <Microscope size={20} className="text-purple-500" />,
    image: "/lecturers/savelyeva.jpg",
    email: "savelyeva@onmu.edu.ua"
  },
  {
    name: "Гребенник Наталія Григорівна",
    role: "Доцент кафедри",
    degree: "Кандидат економічних наук",
    interests: ["Стартап-екосистеми", "Інновації", "Маркетингові дослідження"],
    icon: <Lightbulb size={20} className="text-yellow-500" />,
    image: "/lecturers/grebennik.jpg",
    email: "grebennyk@onmu.edu.ua"
  },
  {
    name: "Шевченко Олена Ігорівна",
    role: "Доцент кафедри",
    degree: "Кандидат економічних наук",
    interests: ["Круїзний менеджмент", "Якість послуг", "Туризм"],
    icon: <BookOpen size={20} className="text-green-500" />,
    image: "/lecturers/shevchenko.jpg",
    email: "shevchenko@onmu.edu.ua"
  }
];

export default function Faculty() {
  return (
    <div className="container maritime-bg mx-auto px-4 py-20 min-h-screen">      
      <div className="text-center mb-20">
        <h1 className="text-5xl font-black text-[#1a2c3d] uppercase tracking-tighter mb-4">
          Наш <span className="text-yellow-500">колектив</span>
        </h1>
        <div className="h-1.5 w-24 bg-[#1a2c3d] mx-auto mb-8"></div>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium italic leading-relaxed">
          Команда професіоналів, які формують майбутнє морської індустрії України через поєднання науки та практики.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {staff.map((person, idx) => (
          <div 
            key={idx} 
            className="group bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
          >
            <div className="h-80 bg-slate-100 relative overflow-hidden">
              <img 
                src={person.image} 
                alt={person.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placeholder.com';
                }}
              />
              <div className="absolute top-6 right-6 bg-white/90 p-3 rounded-2xl backdrop-blur-md shadow-xl text-[#1a2c3d]">
                {person.icon}
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-yellow-600 font-black uppercase text-[10px] tracking-[0.2em] mb-3">
                {person.role}
              </p>
              <h3 className="text-xl font-bold text-[#1a2c3d] leading-tight mb-4 min-h-[3.5rem]">
                {person.name}
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Award size={18} className="text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-slate-500 font-bold uppercase tracking-tight">{person.degree}</p>
                </div>                
                
                <div className="flex flex-wrap gap-2">
                  {person.interests.map((interest, i) => (
                    <span key={i} className="bg-slate-50 text-slate-400 text-[9px] px-3 py-1 rounded-lg font-black uppercase border border-slate-100 group-hover:border-yellow-200 transition-colors">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <a 
                href={`mailto:${person.email}`}
                className="w-full py-4 bg-[#1a2c3d] text-white rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-yellow-500 hover:text-[#1a2c3d] transition-all flex items-center justify-center gap-3 shadow-lg"
              >
                <Mail size={16} /> Зв'язатися
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-32 p-12 bg-[#1a2c3d] rounded-[3.5rem] flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="relative z-10">
          <h4 className="text-3xl font-black text-white uppercase tracking-tighter mb-2 leading-none">Бажаєте стати частиною МБМ?</h4>
          <p className="text-slate-400 font-medium text-lg italic">Запрошуємо до співпраці науковців та фахівців-практиків.</p>
        </div>
        <button className="relative z-10 px-10 py-5 bg-yellow-500 text-[#1a2c3d] rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all">
          Відкриті вакансії
        </button>
      </div>
    </div>
  );
}




