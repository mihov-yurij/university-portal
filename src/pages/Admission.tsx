import { useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.mjs?url';
import { FileText, Loader2, ChevronRight, ShieldCheck } from 'lucide-react';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;
const REGLAMENT_DOCS = [
  { name: "Положення про організацію освітнього процесу", file: "polog_org.pdf" },
  { name: "Положення про порядок розроблення та перегляд освітніх програм", file: "procedure.pdf" },
  { name: "Про організацію та проведення дуального навчання", file: "regulations_kafedra.pdf" },
  { name: "Кодекс академічної доброчесності", file: "code_integrity.pdf" },
  { name: "Положення про якість освіти", file: "quality_ed.pdf" },
  { name: "Сертифікат ISO 9001:2015", file: "iso_cert.pdf" },
  { name: "Положення про норми часу", file: "time_norms.pdf" },
  { name: "Положення про підвищення кваліфікації", file: "advanced_training.pdf" },
  { name: "Права на академічну мобільність", file: "academic_mobility.pdf" }
];

const EVALUATION_DOCS = [
  { name: "ІНСТРУКЦІЯ ПО ОЦІНЮВАННЮ", file: "grading.pdf" },
  { name: "Положення про конфліктні ситуації", file: "conflict_resolve.pdf" },
  { name: "Рейтинг НПП 2024-2025", file: "npp_rating.pdf" }
];
export default function Admission() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeDoc, setActiveDoc] = useState<string | null>(null);

  async function loadPdf(fileName: string) {
    setLoading(true);
    setImages([]);
    setActiveDoc(fileName);
    try {
      const pdfPath = `/docs/${fileName}`;
      const loadingTask = pdfjsLib.getDocument(pdfPath);
      const pdf = await loadingTask.promise;
      const urls: string[] = [];
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (context) {
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          await page.render({ canvasContext: context, viewport, canvas }).promise;
          urls.push(canvas.toDataURL('image/webp', 0.8));
        }
      }
      setImages(urls);
    } catch (e) { console.error(e); }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-[#1a2c3d] text-white py-20 px-4 relative overflow-hidden">
      </section>
      <div className="container mx-auto max-w-6xl py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div>
              <h3 className="text-[#1a2c3d] font-black uppercase text-sm mb-4 border-b border-yellow-500 pb-2 flex items-center gap-2">
                <FileText size={18} /> Регламентація
              </h3>
              <div className="flex flex-col gap-2">
                {REGLAMENT_DOCS.map((doc, i) => (
                  <button key={i} onClick={() => loadPdf(doc.file)}
                    className={`flex justify-between items-center p-3 rounded-lg border text-left transition-all text-[11px] font-bold uppercase shadow-sm ${activeDoc === doc.file ? 'bg-yellow-500 text-white border-yellow-600' : 'bg-white hover:border-yellow-500 text-slate-700'}`}>
                    {doc.name} <ChevronRight size={14} />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[#1a2c3d] font-black uppercase text-sm mb-4 border-b border-yellow-500 pb-2 flex items-center gap-2">
                <ShieldCheck size={18} /> Оцінювання
              </h3>
              <div className="flex flex-col gap-2">
                {EVALUATION_DOCS.map((doc, i) => (
                  <button key={i} onClick={() => loadPdf(doc.file)}
                    className={`flex justify-between items-center p-3 rounded-lg border text-left transition-all text-[11px] font-bold uppercase shadow-sm ${activeDoc === doc.file ? 'bg-[#1a2c3d] text-white' : 'bg-white hover:border-blue-500 text-slate-700'}`}>
                    {doc.name} <FileText size={14} />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-inner border border-slate-200 p-4 sticky top-24 min-h-[500px] max-h-[80vh] overflow-y-auto">
            {loading ? (
              <div className="flex flex-col items-center justify-center h-64 text-slate-400">
                <Loader2 className="animate-spin mb-2" size={32} />
                <span className="text-[10px] font-bold uppercase">Завантаження...</span>
              </div>
            ) : images.length > 0 ? (
              <div className="space-y-4">
                {images.map((src, idx) => <img key={idx} src={src} className="w-full shadow-md rounded" alt="page" />)}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 opacity-20 text-slate-400">
                <FileText size={64} />
                <p className="font-bold uppercase text-[10px] mt-4">Оберіть документ</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}



