import { useState } from 'react';
import { FileCheck, Globe, Loader2, X } from 'lucide-react';

export default function ScienceArticle() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeDoc, setActiveDoc] = useState<string | null>(null);

  async function loadPdf(fileName: string) {
    setLoading(true);
    setImages([]);
    setActiveDoc(fileName);
    try {
      const pdfPath = `/docs/${fileName}`;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const loadingTask = (window as any).pdfjsLib.getDocument(pdfPath);
      const pdf = await loadingTask.promise;
      const urls: string[] = [];
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 2.0 });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (context) {
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          await page.render({ canvasContext: context, viewport }).promise;
          urls.push(canvas.toDataURL('image/webp', 0.8));
        }
      }
      setImages(urls);
    } catch (e) {
      console.error(e);
    } setLoading(false);
        }
  return (
    <div className="science-main-bg min-h-screen font-sans overflow-x-hidden ">
      <section className="relative bg-[#010a1a] bg-[url('/img/window.png')] bg-cover bg-center bg-no-repeat py-12 md:py-24 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Globe className="text-yellow-400" size={32} />
            <p className="text-yellow-400 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
              Scientific Publications
            </p>
          </div>
          <h1 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-tight break-words">
            Наукові публікації<br className="hidden md:block" /> кафедри
          </h1>
        </div>
      </section>
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="text-slate-700 leading-relaxed italic border-l-4 border-blue-500 pl-6">
            Усі викладачі мають активні профілі Google Scholar. Середній показник h-індексу в Google Scholar становить "5.7". 
            Більш ніж 80% колективу мають Scopus Author ID, що свідчить про інтеграцію кафедри у світовий науковий простір. 
            Середній рівень h-індексу в Scopus складає 2.
          </p>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl border border-slate-100 mb-8 md:mb-10">
            <div className="flex flex-row gap-4 items-center mt-8">
              <button 
                className="flex items-center gap-2 px-8 py-3 border border-blue-300 bg-blue-50 text-blue-700 font-medium rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm"
                onClick={() => loadPdf('../docs/article_1.pdf')}>
                <FileCheck size={20} />
                <span>ІНФОРМАЦІЯ ЩОДО ІНДЕКСУ ЦИТУВАНЬ НПП КАФЕДРИ</span>
              </button>
              <button 
                className="flex items-center gap-2 px-8 py-3 border border-amber-300 bg-amber-50 text-amber-700 font-medium rounded-2xl hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-sm"
                onClick={() => loadPdf('../docs/article_2.pdf')}>
                <FileCheck size={20} />
                <span>Кількість наукових статей SCOPUS / WOS</span>
              </button>
            </div>
            {activeDoc && (
  <div className="mt-10 bg-white rounded-xl shadow-lg border overflow-hidden flex flex-col h-[700px] md:h-[900px]">
    <div className="flex justify-between items-center p-4 md:p-6 border-b bg-white shrink-0">
      <h3 className="text-sm md:text-xl font-bold text-[#1a2c3d] truncate mr-2">
        {activeDoc}
      </h3>
      <button 
        onClick={() => { setImages([]); setActiveDoc(null); }}
        className="text-red-500 hover:underline font-bold text-xs md:text-base flex items-center gap-1"
      >
        Закрити <X size={16} />
      </button>
    </div>
    <div className="flex-1 overflow-y-auto bg-slate-100 p-2 md:p-10 scrollbar-thin">
      {loading ? (
        <div className="flex flex-col items-center justify-center h-full">
          <Loader2 className="animate-spin text-blue-600 mb-4" size={40} />
          <p className="text-slate-500 font-bold text-sm">Завантаження...</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4 md:gap-10">
          {images.map((img, i) => (
            <div key={i} className="relative shadow-xl">
              <img 
                src={img} 
                className="w-full h-auto bg-white border" 
                alt="page" 
              />
              <div className="text-[10px] text-center py-2 text-slate-400 font-bold">
                PAGE {i + 1}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
)}
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
             <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-center items-center text-center">
                <p className="text-slate-400 font-black text-[9px] uppercase tracking-widest mb-2 italic">Матеріали</p>
                <p className="text-xs font-bold text-[#1a2c3d] mb-4">Переглянути монографії та наукові статті за темою</p>
                <button className="text-[#1a2c3d] border-2 border-[#1a2c3d] px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#1a2c3d] hover:text-white transition-all">
                  Архів робіт
                </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

