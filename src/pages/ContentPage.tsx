import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Download, ShieldCheck, Printer, Loader2 } from 'lucide-react';

// 1. Импортируем всё из pdfjs-dist
import * as pdfjsLib from 'pdfjs-dist';

// 2. ИМПОРТИРУЕМ ВОРКЕР НАПРЯМУЮ (Vite это понимает)
import pdfWorker from 'pdfjs-dist/build/pdf.worker.mjs?url';

// 3. Назначаем путь к воркеру
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

export default function ContentPage() {
  // ... остальной код компонента без изменений

  const pdfPath = "/docs/plan_2025.pdf";
  
  // Состояния для хранения массива картинок и процесса загрузки
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function convertPdfToImages() {
      try {
        setLoading(true);
        const loadingTask = pdfjsLib.getDocument(pdfPath);
        const pdf = await loadingTask.promise;
        const totalPages = pdf.numPages;
        const imgArray: string[] = [];

        // Проходим по каждой странице и конвертируем в PNG
        for (let i = 1; i <= totalPages; i++) {
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 2.0 }); // 2.0 для высокой четкости
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');

     // ... внутри функции convertPdfToImages
if (context) {
  canvas.height = viewport.height;
  canvas.width = viewport.width;

  const renderContext = {
    canvasContext: context,
    viewport: viewport,
    canvas: canvas, // Это решает проблему
  };

  await page.render(renderContext).promise;
  imgArray.push(canvas.toDataURL('image/png'));
}
// ...

        }
        setImages(imgArray);
      } catch (error) {
        console.error("Ошибка при конвертации PDF:", error);
      } finally {
        setLoading(false);
      }
    }

    convertPdfToImages();
  }, [pdfPath]);

  return (
    <div className="min-h-screen bg-slate-50 py-12 font-sans text-left">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Кнопка Назад */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-[#1a2c3d] mb-8 font-black uppercase text-[10px] tracking-[0.2em] transition-all group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
          Назад на головну
        </Link>

        {/* Заголовок */}
        <header className="mb-12">
          <div className="flex items-center gap-3 text-blue-600 mb-4">
            <ShieldCheck size={24} />
            <span className="font-black uppercase text-[11px] tracking-[0.3em]">Офіційна публікація</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-[#1a2c3d] uppercase tracking-tighter leading-none mb-6">
            Навчальний <span className="text-blue-600 italic">план 2025</span>
          </h1>
          <div className="h-2 w-32 bg-yellow-500"></div>
        </header>

        <main className="relative">
          <div className="absolute -inset-1 maritime-bg from-blue-600 to-yellow-500 rounded-[3.5rem] blur opacity-15"></div>
          
          <article className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-[3.5rem] shadow-2xl overflow-hidden border border-slate-100">
            
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
                <a href={pdfPath} download className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                  <Download size={16} /> Скачати
                </a>
                <a href={pdfPath} target="_blank" rel="noreferrer" className="p-4 bg-yellow-500 hover:bg-yellow-400 text-[#1a2c3d] rounded-2xl transition-all shadow-lg flex items-center gap-3 text-[11px] font-black uppercase tracking-widest">
                  <Printer size={18} /> Весь екран
                </a>
              </div>
            </div>

            {/* ПЛОЩАДЬ ДЛЯ ОТОБРАЖЕНИЯ ИЗОБРАЖЕНИЙ */}
            <div className="bg-slate-100 min-h-[600px] relative p-4 md:p-8 flex flex-col gap-8 items-center">
              {loading ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-slate-500">
                  <Loader2 className="animate-spin" size={48} />
                  <p className="font-bold uppercase text-[10px] tracking-widest">Обробка документа...</p>
                </div>
              ) : (
                images.map((src, index) => (
                  <div key={index} className="shadow-2xl border border-slate-200 bg-white leading-[0]">
                    <img 
                      src={src} 
                      alt={`Page ${index + 1}`} 
                      className="max-w-full h-auto"
                    />
                    <div className="bg-white text-[10px] text-slate-300 py-2 px-4 text-right font-mono italic">
                      Сторінка {index + 1}
                    </div>
                  </div>
                ))
              )}
            </div>

            <footer className="bg-slate-50 p-6 text-center border-t border-slate-100">
              <p className="text-slate-400 font-bold uppercase text-[9px] tracking-[0.4em]">
                Одеський Національний Морський Університет • Кафедра МБМ • 2026
              </p>
            </footer>
          </article>
        </main>
      </div>
    </div>
  );
}






    