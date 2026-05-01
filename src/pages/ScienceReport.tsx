import { useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.mjs?url';
import { FileText, Loader2, GraduationCap, Eye, Download } from 'lucide-react';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

const REPORTS = [
  { id: 1, title: "Звіт з наукової роботи 2024", file: "sci_24.pdf" },
  { id: 2, title: "Звіт з наукової роботи 2025", file: "sci_25.pdf" }
];

export default function ScienceReport() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeDoc, setActiveDoc] = useState<string | null>(null);

  async function loadPdf(fileName: string) {
    setLoading(true);
    setImages([]);
    setActiveDoc(fileName);
    try {
      // Путь должен соответствовать расположению файлов в public
      const pdfPath = `/science/scpdf/${fileName}`;
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
    } catch (e) {
      console.error("Ошибка загрузки PDF:", e);
    }
    setLoading(false);
  }

  return (
    <div className="flex flex-col font-sans bg-white min-h-screen pb-20">
      <section className="py-16 bg-[#1a2c3d] text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <GraduationCap className="text-yellow-400" size={32} />
            <p className="text-yellow-400 font-bold uppercase tracking-widest text-sm">Наукова діяльність</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Звіт з наукової роботи</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">


            
<div className="w-full md:w-1/2">

  {/* Заменили text-lg на text-base для основного текста */}
  <div className="text-base text-black leading-relaxed text-justify mb-12">
    <h1 className="text-4xl font-bold text-blue-700 uppercase tracking-tight mb-4">
      ЗВІТ З НАУКОВОЇ РОБОТИ ЗА 2021-2025 РОКИ 
    </h1>
    <h3 className="mb-6 text-lg text-yellow-500 italic font-medium">
      Кафедра здійснює наукову роботу за такими основними напрямами:
    </h3>
             <p className="mb-4">•	виконання держбюджетних і госпрозрахункових науково-дослідних робіт;</p> <p className="mb-4">
•	підготовка кандидатських і докторських дисертацій аспірантами і пошукувачами кафедри;</p> <p className="mb-4">
•	видання монографій та наукових статей, підручників і навчальних посібників;</p> <p className="mb-4">
•	участь викладачів кафедри у міжнародних, всеукраїнських та міжвузівських конференціях;</p> <p className="mb-4">
•	наукова співпраця з провідними підприємствами та бюджетними установами;</p> <p className="mb-4">
•	участь у міжнародних семінарах та стажування викладачів кафедри в провідних навчальних закладах;</p> <p className="mb-4">
•	залучення обдарованої студентської молоді до наукової роботи тощо.</p> <p className="mb-4">

За звітний період викладачами кафедри захищено 1 докторська (Холоденко А.М.) та 1 кандидатська (Ремзіна Н.А.) дисертації.

Викладачами, докторантами та аспірантами кафедри за звітний період опубліковано: 
5 монографій https://onmu.org.ua/ua/books-onmu/3292-books-tpzorgmb.html, 
26 статей, що індексуються у наукометричних базах Scopus та Web of Science (за квартилями: Q1 – 1, Q2 – 1, Q3 – 11, Q4 – 11, з них у відкритому доступі – 20, без квартилю – 2, Додаток 2 таблиця 6), 
105 статей у фахових наукових виданнях категорії «Б»;
3 підручника https://onmu.org.ua/ua/books-onmu/3332-books-industry-entrepreneurship.html та навчальних посібника загальним обсягом 49 авторських аркушів.
Викладачами, аспірантами та студентами кафедри опубліковано 159 тез доповідей на міжнародні та всеукраїнські наукові конференції.
Професор кафедри І.В. Савельєва є головним редактором, а завідувачка кафедри Ю.О. Наврозова є відповідальним секретарем фахового збірника наукових праць «Розвиток методів управління та господарювання на транспорті» https://www.daemmt.odesa.ua/index.php/daemmt, кожного року виходить 4 його випуски.
У 2023 році кафедрою подавалась заявка "Розробка морських антидронових бонових загороджень для акваторії порту в рамках логістичних систем національної безпеки та оборони" на конкурс МОНУ прикладних наукових досліджень.Викладачі та аспіранти кафедри беруть активну участь у міжнародному науковому проєкті «Blue Gates».</p>
                  <div className="float-left mr-8 mb-4 w-full md:w-[320px]">
                     <img src="/img/sci.png" alt="Science" className="rounded-3xl shadow-lg border w-full h-auto" />
                 </div>
                    <p className="mb-6">Зараз кафедрою подано міжнародний проєкт «Трансформація морських портів України в межах блакитної стратегії Чорноморського регіону».
На кафедрі успішно навчаються 3 докторанти та 15 аспірантів.
На кафедрі успішно виконані держбюджетні науково-дослідні теми «Методи та інструменти аналітики бізнес-процесів суб'єктів підприємницької діяльності в сфері транспорту та туризму» (номер державної реєстрації: 0120U002195, термін виконання: 01.2020-12.2022) та «Економіко-організаційне обґрунтування розробки маркетингових стратегій розвитку підприємств морського, туристичного та готельно-ресторанного бізнесу» (номер державної реєстрації: 0123U101181, термін виконання: 01.2023-12.2025).
Професор кафедри А.М. Холоденко є членом постійної спеціалізованої вченої ради із захисту дисертацій на здобуття наукового ступеня доктора економічних наук Д 70.052.01 Хмельницького національного університету Міністерства освіти і науки України та виступав офіційним опонентом на захисті дисертації Д.Б.Соколовського «Моделювання взаємодії агентів у економічних системах», поданої на здобуття наукового ступеня доктора економічних наук за спеціальністю 08.00.11 «Математичні методи, моделі та інформаційні технології в економіці», 04.11.2024 року.
	Кожного року у квітні кафедра проводить Всеукраїнську науково-практичну конференцію студентів та молодих вчених «Проблеми і перспективи сталого розвитку транспорту» https://onmu.org.ua/ua/konf-2/4108-xiii-conf-trans-online-2025.html.
	Студенти кафедри щороку беруть активну участь у Всеукраїнському конкурсі студентських наукових робіт.
   </p>


                <div className="clear-both"></div>
              </div>

   <div className="space-y-4">
  <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Доступні звіти</p>
  {REPORTS.map((doc) => (
    <button 
      key={doc.id}
      onClick={() => loadPdf(doc.file)}
      className={`w-full flex items-center justify-between p-5 rounded-3xl border-2 transition-all shadow-sm ${
        activeDoc === doc.file 
          ? 'border-[#1a2c3d] bg-slate-50 shadow-md transform scale-[1.01]' 
          : 'border-slate-300 bg-white hover:border-[#1a2c3d]/50 hover:shadow-md'
      }`}
    >
      <div className="flex items-center gap-4">
        <FileText size={20} className={activeDoc === doc.file ? 'text-[#1a2c3d]' : 'text-slate-500'} />
        <span className="font-bold text-[#1a2c3d] uppercase text-[11px] tracking-tight">{doc.title}</span>
      </div>
      <Eye size={18} className={activeDoc === doc.file ? 'text-[#1a2c3d]' : 'text-slate-300'} />
    </button>
  ))}
</div>


            </div>

            <div className="w-full xl:w-1/2 xl:sticky xl:top-10 mt-12 xl:mt-0">
              <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-2 md:p-4 min-h-[500px] xl:max-h-[85vh] overflow-y-auto">

                {loading ? (
                  <div className="flex flex-col items-center justify-center h-[500px] text-slate-400">
                    <Loader2 className="animate-spin mb-2" size={32} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Завантаження...</span>
                  </div>
                ) : images.length > 0 ? (
                  <div className="space-y-4">
                    {images.map((src, idx) => (
                      <div key={idx} className="relative group">
                        <img src={src} className="w-full shadow-md rounded-xl" alt={`page-${idx + 1}`} />
                        <div className="absolute top-2 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="bg-black/50 text-white text-[10px] px-2 py-1 rounded">Стор. {idx + 1}</span>
                        </div>
                      </div>
                    ))}
                    <a href={`/science/scpdf/${activeDoc}`} download className="flex items-center justify-center gap-2 w-full py-4 mt-6 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-bold uppercase text-[10px] tracking-widest hover:bg-slate-50">
                      <Download size={16} /> Скачати PDF версію
                    </a>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-[500px] opacity-20 text-slate-400">
                    <FileText size={64} />
                    <p className="font-bold uppercase text-[10px] mt-4 tracking-widest">Оберіть документ</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}




