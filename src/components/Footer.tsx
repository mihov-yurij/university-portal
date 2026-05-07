import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, } from 'lucide-react';


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
  {/* Facebook */}
  <a href="#" className="bg-white/5 p-3 rounded-lg text-white hover:bg-yellow-500 hover:text-[#0f172a] transition-all" aria-label="Facebook">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  </a>

  {/* Instagram */}
  <a href="#" className="bg-white/5 p-3 rounded-lg text-white hover:bg-yellow-500 hover:text-[#0f172a] transition-all" aria-label="Instagram">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  </a>

  {/* Telegram */}
  <a href="#" className="bg-white/5 p-3 rounded-lg text-white hover:bg-yellow-500 hover:text-[#0f172a] transition-all" aria-label="Telegram">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
  </a>

  {/* TikTok */}
  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-lg text-white hover:bg-yellow-500 hover:text-[#0f172a] transition-all" aria-label="TikTok">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V2a5 5 0 0 0 5 5"/></svg>
  </a>

  {/* LinkedIn */}
  <a href="https://www.linkedin.com/company/%D0%BA%D0%B0%D1%84%D0%B5%D0%B4%D1%80%D0%B0-%D0%BF%D1%96%D0%B4%D0%BF%D1%80%D0%B8%D1%94%D0%BC%D0%BD%D0%B8%D1%86%D1%82%D0%B2%D0%B0-%D1%82%D0%B0-%D1%82%D1%83%D1%80%D0%B8%D0%B7%D0%BC%D1%83-%D0%BE%D0%BD%D0%BC%D1%83/" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-lg text-white hover:bg-yellow-500 hover:text-[#0f172a] transition-all" aria-label="LinkedIn">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  </a>
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







