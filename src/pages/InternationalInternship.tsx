import { Link } from 'react-router-dom';
import { Download, FileText, ArrowLeft, Globe2 } from 'lucide-react';

const InternationalInternship = () => {
  const internshipData = [
    { year: "2024", name: "К.е.н., доц. Ремзіна Н.А.", university: "Cornell University", country: "США" },
    { year: "2024", name: "К.е.н., доц. Чебанова Т.Є.", university: "Varna University of Management, TURAL", country: "Болгарія" },
    { year: "2023", name: "Д.е.н., проф. Холоденко А.М.", university: "Baltic Research Institute", country: "ЄС" },
    { year: "2023", name: "К.е.н., доц. Наврозова Ю.О.", university: "Dunarea de Jos University", country: "Румунія" },
    { year: "2022", name: "К.е.н., доц. Гребенник Н.Г.", university: "University of Social Sciences", country: "Польща" },
    { year: "2021", name: "Пустовіт О.Г.", university: "Varna University of Management", country: "Болгарія" },
    { year: "2021", name: "К.е.н., доц. Матієнко М.В.", university: "Вища школа управління охороною праці, Катовіце", country: "Польща" },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans">
      {/* Шапка страницы */}
      <div className="bg-[#1a2c3d] text-white py-12 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-300 hover:text-yellow-400 uppercase text-[10px] font-bold mb-8 transition-colors no-underline">
            <ArrowLeft size={14} /> Назад на головну
          </Link>
          <div className="flex items-center gap-3 text-yellow-500 font-bold text-xs uppercase tracking-[0.2em] mb-4">
            <Globe2 size={20} />
            Професійний розвиток
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6">
            Міжнародні стажування <br /> викладачів
          </h1>
          <div className="w-24 h-2 bg-yellow-500"></div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
            <h3 className="font-bold text-[#1a2c3d] uppercase text-sm"> Реєстр стажувань</h3>
            <button className="flex items-center gap-2 text-[10px] font-bold uppercase bg-[#1a2c3d] text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-all">
              <Download size={14} /> PDF версія
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-[#1a2c3d] uppercase text-[11px] font-black tracking-widest">
                  <th className="p-5 border-b">Рік</th>
                  <th className="p-5 border-b">ПІБ викладача</th>
                  <th className="p-5 border-b">Установа</th>
                  <th className="p-5 border-b">Країна</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {internshipData.map((row, index) => (
                  <tr key={index} className="hover:bg-blue-50/50 transition-colors border-b border-slate-100 last:border-0">
                    <td className="p-5 font-bold text-blue-600">{row.year}</td>
                    <td className="p-5 font-bold text-[#1a2c3d]">{row.name}</td>
                    <td className="p-5 text-slate-600 italic">{row.university}</td>
                    <td className="p-5">
                      <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter">
                        {row.country}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-8 flex items-start gap-4 p-6 bg-blue-50 rounded-xl border border-blue-100">
          <FileText className="text-blue-500 shrink-0" />
          <p className="text-xs text-blue-800 leading-relaxed italic">
            Дані в таблиці відображають активність викладацького складу кафедри у межах міжнародних грантових програм та міжуніверситетських угод про співпрацю.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InternationalInternship;
