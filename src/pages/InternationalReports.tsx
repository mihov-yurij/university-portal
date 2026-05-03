import { Link } from 'react-router-dom';
import { FileText, Download, ArrowLeft, BarChart3 } from 'lucide-react';

const InternationalReports = () => {
  const reports = [
    { year: "2023-2024", title: "Звіт про міжнародну діяльність кафедри за навчальний рік" },
    { year: "2022-2023", title: "Результати участі у програмах академічної мобільності" },
    { year: "2021-2022", title: "Підсумковий звіт з міжнародного співробітництва" }
  ];
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#1a2c3d] uppercase text-[11px] font-bold mb-8 transition-colors no-underline">
          <ArrowLeft size={14} /> Назад на головну
        </Link>
        <header className="mb-12">
          <div className="flex items-center gap-3 text-blue-700 font-bold text-xs uppercase tracking-[0.2em] mb-4">
            <BarChart3 size={20} />
            Звітність кафедри
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#1a2c3d] uppercase tracking-tighter leading-none mb-6">
            Звіт з міжнародної <br /> діяльності
          </h1>
          <div className="w-32 h-2 bg-yellow-500"></div>
        </header>
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-8 md:p-12">
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-3xl">
              У цьому розділі представлені офіційні документи та статистичні дані, що відображають результати роботи кафедри у напрямку міжнародного співробітництва, партнерства та наукової інтеграції.
            </p>
            <div className="grid gap-4">
              {reports.map((report, index) => (
                <div 
                  key={index}
                  className="group flex items-center justify-between p-6 bg-slate-50 rounded-2xl border-2 border-transparent hover:border-blue-100 hover:bg-white transition-all duration-300 cursor-pointer">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                      <FileText size={24} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest leading-none">
                        Рік: {report.year}
                      </span>
                      <h3 className="text-slate-800 font-bold text-lg leading-tight mt-1">
                        {report.title}
                      </h3>
                    </div>
                  </div>                  
                  <div className="flex items-center gap-2 text-[#1a2c3d] font-bold text-[10px] uppercase bg-yellow-400 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <Download size={14} />
                    <span>PDF</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 p-6 border-t border-slate-100 text-center">
            <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">
              Останнє оновлення звітності: Серпень 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalReports;
