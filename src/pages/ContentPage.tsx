import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Download, ShieldCheck, Printer } from 'lucide-react';

export default function ContentPage() {
  const pdfPath = "/docs/plan_2025.pdf";

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-[#1a2c3d] mb-8 font-black uppercase text-[10px] tracking-[0.2em] transition-all group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
          Назад на головну
        </Link>
        <div className="mb-12">
          <div className="flex items-center gap-3 text-blue-600 mb-4">
            <ShieldCheck size={24} />
            <span className="font-black uppercase text-[11px] tracking-[0.3em]">Публічна інформація</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-[#1a2c3d] uppercase tracking-tighter leading-none mb-6">
            Навчальний <span className="text-blue-600 italic">план 2025</span>
          </h1>
          <div className="h-2 w-32 bg-yellow-500"></div>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-[3rem] blur opacity-20"></div>
          
          <div className="relative bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
            
            <div className="bg-[#1a2c3d] p-6 flex flex-col md:flex-row justify-between items-center gap-6 border-b-4 border-yellow-500">
              <div className="flex items-center gap-4 text-left">
                <div className="bg-yellow-500 p-3 rounded-2xl text-[#1a2c3d] shadow-lg">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="text-white font-black uppercase tracking-tight text-sm">Офіційний документ кафедри МБМ</h3>
                  <p className="text-slate-400 font-bold uppercase text-[9px] tracking-widest leading-none">ЗАТВЕРДЖЕНО ВЧЕНОЮ РАДОЮ ОНМУ</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a 
                  href={pdfPath} 
                  download 
                  className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"
                >
                  <Download size={16} /> Скачати
                </a>
                <a 
                  href={pdfPath} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 bg-yellow-500 hover:bg-yellow-400 text-[#1a2c3d] rounded-xl transition-all shadow-lg flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"
                >
                  <Printer size={16} /> Друк / Весь екран
                </a>
              </div>
            </div>

            <div className="bg-slate-100 h-[700px] md:h-[1000px] relative">
              <iframe 
                src={`${pdfPath}#view=FitH&toolbar=1`} 
                className="w-full h-full border-none"
                title="Навчальний план 2025"
              >
                <p>Ваш браузер не підтримує вбудований перегляд.</p>
              </iframe>
            </div>
            
            <div className="bg-slate-50 p-6 text-center border-t border-slate-100">
              <p className="text-slate-400 font-bold uppercase text-[9px] tracking-[0.4em]">
                Одеський Національний Морський Університет • Кафедра МБМ • 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



    