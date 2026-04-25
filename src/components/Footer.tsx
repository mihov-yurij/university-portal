import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-slate-400 py-12 border-t border-white/5 font-sans mt-auto text-left">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">  
           
              <div className="space-y-4">
            <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em] mb-6">Контакти</h4>
            <div className="text-sm space-y-4">
              <div className="flex items-start gap-3 group">
                <MapPin size={18} className="text-yellow-500 shrink-0 group-hover:scale-110 transition-transform" />
                <p className="group-hover:text-white transition-colors cursor-default">вул. Мечникова, 34, м. Одеса, 65029</p>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone size={18} className="text-yellow-500 shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+380487283100" className="group-hover:text-white transition-colors">+38 (048) 728-31-00</a>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail size={18} className="text-yellow-500 shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:mb-m@onmu.org.ua" className="group-hover:text-white transition-colors">mb-m@onmu.org.ua</a>
              </div>
            </div>
          </div>

       
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em]">Ми в мережі</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="bg-white/5 p-3 rounded-lg text-white font-bold text-[10px] hover:bg-yellow-500 hover:text-[#0f172a] transition-all">FB</a>
              <a href="#" className="bg-white/5 p-3 rounded-lg text-white font-bold text-[10px] hover:bg-yellow-500 hover:text-[#0f172a] transition-all">IG</a>
              <a href="#" className="bg-white/5 p-3 rounded-lg text-white font-bold text-[10px] hover:bg-yellow-500 hover:text-[#0f172a] transition-all">TG</a>
            </div>          
            <div className="flex flex-col gap-2 text-[10px] font-black uppercase tracking-widest">
              <Link to="/admission" className="hover:text-yellow-500 transition-colors">Приймальна комісія</Link>
              <Link to="/faculty" className="hover:text-yellow-500 transition-colors">Викладацький склад</Link>
            </div>
          </div>
              <div className="flex flex-col justify-center md:items-end text-left md:text-right">
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">© 2026 Кафедра Морського бізнесу</p>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-yellow-500">та маркетингу ОНМУ</p>
            </div>
            <div className="mt-4 opacity-30 text-[8px] font-bold uppercase tracking-widest text-white">
               Одеський Національний Морський Університет
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;







