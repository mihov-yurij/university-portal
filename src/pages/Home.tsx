import { Link } from 'react-router-dom';
import { Award, Target, Users, Ship, BarChart, Handshake } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';


export default function Home() {
  return (
    <div className="flex flex-col font-sans">      
      <section className="bg-[#1a2c3d] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-12 duration-1000 text-white min-h-screen pt-32 pb-20 px-4 flex items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full -mr-64 -mt-64 blur-[120px]">
        </div>        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl space-y-8">
            <div className="space-y-2">
              <p className="text-yellow-400 font-black uppercase tracking-[0.3em] text-sm animate-pulse">
                Одеський Національний Морський Університет
              </p>
              <h1 className="text-5xl md:text-8xl font-gray-100 leading-[0.9] tracking-tighter">
                Ваш шлях <br />
                <span className="text-yellow-400">у морський</span> <br />
                бізнес
              </h1>
            </div>

            <p className="text-lg md:text-2xl text-slate-300 font-light max-w-2xl leading-relaxed italic">
              Кафедра «Морський бізнес та маркетинг» — це старт вашої кар'єри 
              в глобальній логістиці та управлінні портами.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/admission" 
                className="bg-yellow-500 text-[#1a2c3d] px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-yellow-400 transition-all text-center shadow-xl hover:-translate-y-1"
              >
                Вступити зараз
              </Link>
              <Link 
                to="/about/0" 
                className="border-2 border-white/20 hover:bg-white/10 px-10 py-5 rounded-2xl font-bold transition-all text-white text-center"
              >
                Про кафедру
              </Link>
            </div>
          </div>
        </div>
      </section>
<section className="py-20 bg-white motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-12 duration-1000 border-b border-slate-100">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      <StatCard icon={<Award size={32} />} number="90+" label="Років досвіду" />
      <StatCard icon={<Users size={32} />} number="1500+" label="Випускників" />
      <StatCard icon={<Target size={32} />} number="4" label="Програми навчання" />
      <StatCard icon={<Ship size={32} />} number="25+" label="Партнерів галузі" />
    </div>
  </div>
</section>



      <FadeIn>
      <section className="py-24 bg-slate-50 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-12 duration-1000">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16 space-y-4">
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.4em]">Переваги</h2>
              <h3 className="text-4xl font-black text-[#1a2c3d] uppercase tracking-tighter">Чому обирають <span className="text-yellow-500">нас?</span></h3>
           </div>
           <div className="grid md:grid-cols-3 gap-10">
              <FeatureCard 
                icon={<Ship size={48} className="text-blue-600" />} 
                title="Морська торгівля" 
                desc="Вивчення управління портами та міжнародних перевезень на реальних кейсах." 
              />
              <FeatureCard 
                icon={<BarChart size={48} className="text-blue-600" />} 
                title="Фінансовий менеджмент" 
                desc="Сучасні методи управління капіталом у сфері морського адміністрування." 
              />
              <FeatureCard 
                icon={<Handshake size={48} className="text-blue-600" />} 
                title="Працевлаштування" 
                desc="Наші партнери — провідні крюїнгові, стивідорні та логістичні компанії." 
              />
           </div>
        </div>
      </section>
      </FadeIn>      
      <section className="py-24 bg-white motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-12 duration-1000 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h3 className="text-4xl font-black text-[#1a2c3d] uppercase leading-none tracking-tighter">
                Ми будуємо майбутнє <br />
                <span className="text-blue-600 italic">морської еліти</span>
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed italic border-l-4 border-yellow-500 pl-6">
                "Наша місія — надати студентам не лише знання, а й практичні інструменти для управління глобальними процесами."
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-center gap-3 font-bold text-[#1a2c3d] text-sm uppercase tracking-widest">
                  <Target className="text-yellow-500" /> Фокус на практиці
                </div>
                <div className="flex items-center gap-3 font-bold text-[#1a2c3d] text-sm uppercase tracking-widest">
                  <Users className="text-yellow-500" /> Нетворкінг
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
               <h4 className="text-center font-black uppercase text-xs tracking-widest text-slate-400 mb-8 text-[10px]">Ключові партнери</h4>
               <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-2xl shadow-sm text-center font-black text-slate-300 uppercase tracking-tighter text-xl">AMPU</div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm text-center font-black text-slate-300 uppercase tracking-tighter text-xl">MAERSK</div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm text-center font-black text-slate-300 uppercase tracking-tighter text-xl">TIS</div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm text-center font-black text-slate-300 uppercase tracking-tighter text-xl">GOL</div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const StatCard = ({ icon, number, label }: { icon: React.ReactNode; number: string; label: string }) => (
  <div className="text-center group flex flex-col items-center py-6">   
    <div className="mb-4 text-yellow-500/60 group-hover:text-yellow-500 transition-colors">
      {icon}
    </div>
   
    <div className="text-4xl md:text-5xl font-black text-yellow-500 mb-2 tracking-tighter">
      {number}
    </div>
    
    <div className="h-1 w-10 bg-slate-200 my-3 group-hover:w-16 group-hover:bg-yellow-500 transition-all"></div>
   
    <p className="text-[#1a2c3d] font-black uppercase text-[11px] tracking-[0.2em] leading-tight">
      {label}
    </p>
  </div>
);

interface FeatureCardProps {
  icon: React.ReactNode; 
  title: string; 
  desc: string;
}

const FeatureCard = ({ icon, title, desc }: FeatureCardProps) => (
  <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
    <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    <h3 className="text-xl font-black text-[#1a2c3d] mb-4 uppercase tracking-tight">
      {title}
    </h3>
    <p className="text-slate-500 leading-relaxed text-sm font-medium">
      {desc}
    </p>
  </div>
);
