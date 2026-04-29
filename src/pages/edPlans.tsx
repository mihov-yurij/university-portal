import { useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.mjs?url';
import { FileText, Loader2, GraduationCap, ShieldCheck, ChevronRight } from 'lucide-react';

// Настройка воркера PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

const EdPlans = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeDoc, setActiveDoc] = useState<string | null>(null);

  // Списки документов на основе ваших файлов
  const reglamentDocs = [
    { name: "Положення про організацію освітнього процесу", file: "1. Polog_org_education.pdf" },
    { name: "Положення про порядок розроблення та перегляд освітніх програм", file: "3. procedure_review_edu.pdf" },
    { name: "Положення про кафедру", file: "4. Regulations_organizati.pdf" },
    { name: "Кодекс академічної доброчесності", file: "5. Code_Academic_Integr.pdf" },
    { name: "Положення про якість освіти", file: "6. polojenie-quality-educ.pdf" },
    { name: "Сертифікат ISO 9001:2015", file: "7. certificate-iso-25ua.pdf" },
    { name: "Положення про норми часу", file: "8. Polog_time_norms_pla.pdf" },
    { name: "Положення про підвищення кваліфікації", file: "9. poloj_advanced_trainin.pdf" },
    { name: "Права на академічну мобільність", file: "Polog_right_academic_m.pdf" }
  ];

  const evaluationDocs = [
    { name: "ІНСТРУКЦІЯ ПО ОЦІНЮВАННЮ", file: "Instruct.pdf" }, // ВНИМАНИЕ: проверьте пробелы и расширение .pdf
    { name: "Положення про конфліктні ситуації", file: "Polog_settlement_conflic.pdf" }
  ];


  // Функция конвертации PDF в изображения
  async function loadPdf(fileName: string) {
    setLoading(true);
    setImages([]);
    setActiveDoc(fileName);

    try {
      const pdfPath = `/docs/${fileName}`; // Файлы должны лежать в public/docs/
      const loadingTask = pdfjsLib.getDocument(pdfPath);
      const pdf = await loadingTask.promise;
      const urls: string[] = [];

      for (let i = 1; i <= pdf.numPages; i++) {
// ... внутри цикла for
const page = await pdf.getPage(i);
const viewport = page.getViewport({ scale: 1.5 });
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

if (context) {
  canvas.height = viewport.height;
  canvas.width = viewport.width;

  // ИСПРАВЛЕНО: добавляем параметр canvas: canvas
  await page.render({ 
    canvasContext: context, 
    viewport: viewport,
    canvas: canvas // <-- Добавьте эту строку
  }).promise;

  urls.push(canvas.toDataURL('image/webp', 0.8));
}
// ...

      }
      setImages(urls);
    } catch (error) {
      console.error("Помилка завантаження PDF:", error);
      alert("Не вдалося завантажити файл. Перевірте, чи є він у папці public/docs/");
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* ЛЕВАЯ КОЛОНКА: МЕНЮ С КНОПКАМИ */}
        <div className="space-y-8">
          <section>
            <div className="flex items-center gap-2 mb-6 text-[#1a2c3d] border-b-2 border-yellow-500 pb-2">
              <GraduationCap size={24} />
              <h2 className="font-black uppercase text-sm tracking-wider">Регламентація процесу</h2>
            </div>
            <div className="flex flex-col gap-2">
              {reglamentDocs.map((doc, i) => (
                <button 
                  key={i}
                  onClick={() => loadPdf(doc.file)}
                  className={`flex items-center justify-between p-3 rounded-lg border text-left transition-all text-xs font-bold uppercase ${activeDoc === doc.file ? 'bg-yellow-500 border-yellow-600 text-white' : 'bg-white hover:border-yellow-500 text-slate-700'}`}
                >
                  <span className="flex-1 pr-2">{doc.name}</span>
                  <ChevronRight size={16} />
                </button>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-6 text-[#1a2c3d] border-b-2 border-yellow-500 pb-2">
              <ShieldCheck size={24} />
              <h2 className="font-black uppercase text-sm tracking-wider">Оцінювання та НПП</h2>
            </div>
            <div className="flex flex-col gap-2">
              {evaluationDocs.map((doc, i) => (
                <button 
                  key={i}
                  onClick={() => loadPdf(doc.file)}
                  className={`flex items-center justify-between p-3 rounded-lg border text-left transition-all text-xs font-bold uppercase ${activeDoc === doc.file ? 'bg-[#1a2c3d] border-blue-900 text-white' : 'bg-white hover:border-blue-500 text-slate-700'}`}
                >
                  <span>{doc.name}</span>
                  <FileText size={16} />
                </button>
              ))}
            </div>
          </section>
        </div>

        {/* ПРАВАЯ КОЛОНКА: ПРОСМОТР ФАЙЛА */}
        <div className="bg-white rounded-2xl shadow-inner border border-slate-200 p-4 sticky top-24 min-h-[600px] flex flex-col items-center overflow-y-auto max-h-[85vh]">
          {loading && (
            <div className="flex flex-col items-center justify-center h-full my-auto">
              <Loader2 className="animate-spin text-yellow-600 mb-4" size={48} />
              <p className="text-slate-400 font-bold uppercase text-xs">Обробка документа...</p>
            </div>
          )}

          {!loading && images.length > 0 && (
            <div className="w-full space-y-4">
              {images.map((src, idx) => (
                <img key={idx} src={src} alt="page" className="w-full shadow-lg rounded border border-slate-100" />
              ))}
            </div>
          )}

          {!loading && images.length === 0 && (
            <div className="my-auto text-center opacity-20">
              <FileText size={80} className="mx-auto mb-4" />
              <p className="font-black uppercase text-sm">Оберіть документ<br/>для перегляду</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default EdPlans;
