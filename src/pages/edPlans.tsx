import { useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.mjs?url';
import { Loader2, ChevronRight, GraduationCap, Quote, BookOpen } from 'lucide-react';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

// --- 1. ТИПИЗАЦИЯ (БЕЗ ANY) ---
interface SectionItem {
  name?: string;
  file?: string;
  header?: string;
}

interface StudyPlan {
  year: string;
  fullTime: string;
  partTime: string | null;
}

interface ProgramData {
  level: string;
  title: string;
  color: string;
  items: SectionItem[];
  guarantor: {
    name: string;
    title: string;
    bio: string | React.ReactNode;
  };
  studyPlans: StudyPlan[];
}

// --- 2. КОМПОНЕНТ СЕКЦИИ (СТИЛЬ КАК НА СКРИНШОТЕ) ---
const ProgramSection = ({ data, activeDoc, onLoadPdf }: { data: ProgramData, activeDoc: string | null, onLoadPdf: (f: string) => void }) => (
  <section className="mb-14">
    {/* Заголовки */}
    <div className="mb-6 px-1">
      <h2 className="text-[#1a2c3d] font-black text-xl uppercase italic leading-none">{data.level}</h2>
      <p className={`${data.color} font-black text-lg mt-2 uppercase tracking-tight`}>{data.title}</p>
    </div>

    {/* Список кнопок (10 штук) */}
    <div className="flex flex-col gap-2 mb-8">
      {data.items.map((item, i) => (
        item.header ? (
          <p key={i} className="text-[10px] font-black text-slate-400 uppercase mt-5 mb-1 ml-1 tracking-widest">{item.header}</p>
        ) : (
          <button 
            key={i} 
            onClick={() => item.file && onLoadPdf(item.file)}
            className={`w-full flex justify-between items-center px-5 py-4 rounded-xl border transition-all text-left
              ${activeDoc === item.file 
                ? 'bg-slate-50 border-blue-500 shadow-sm' 
                : 'bg-white border-slate-200 hover:border-slate-400'}`}
          >
            <span className="text-[#1a2c3d] font-bold text-[10px] uppercase tracking-wide">
              {item.name}
            </span>
            <ChevronRight size={16} className={activeDoc === item.file ? 'text-blue-600' : 'text-slate-300'} />
          </button>
        )
      ))}
    </div>

    {/* Блок Гаранта (белый, лаконичный) */}
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm mb-8">
      <div className="flex items-center gap-2 mb-6 border-b pb-2 border-slate-100">
        <Quote size={18} className="text-yellow-500" />
        <h3 className="text-[#1a2c3d] font-black uppercase text-xs tracking-tighter">Відомості про гаранта</h3>
      </div>
      <h4 className="text-blue-800 font-black text-lg uppercase mb-2">{data.guarantor.name}</h4>
      <p className="text-slate-500 italic text-[15px] font-bold leading-relaxed mb-6">{data.guarantor.title}</p>
      <div className="text-slate-500 text-[15px] leading-relaxed text-justify whitespace-pre-line font-medium">
  {data.guarantor.bio}</div>
    </div>

    {/* Учебные планы */}
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden text-[10px]">
      <div className="p-4 bg-slate-50 border-b border-slate-200 text-[#1a2c3d] font-black uppercase tracking-tighter">
        Навчальні плани
      </div>
      <table className="w-full text-left">
        <thead className="text-slate-400 uppercase font-black bg-slate-50/50">
          <tr>
            <th className="p-4">Рік</th>
            <th className="p-4 text-center">Денна форма</th>
            <th className="p-4 text-center">Заочна</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 font-bold uppercase">
          {data.studyPlans.map((plan, idx) => (
            <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
              <td className="p-4 text-slate-400 font-black">{plan.year}</td>
              <td className="p-4 text-center">
                <button onClick={() => onLoadPdf(plan.fullTime)} className="text-blue-600 hover:underline">План {plan.year}</button>
              </td>
              <td className="p-4 text-center">
                {plan.partTime ? (
                  <button onClick={() => plan.partTime && onLoadPdf(plan.partTime)} className="text-blue-600 hover:underline">План {plan.year}</button>
                ) : <span className="text-slate-300 italic">—</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default function EdPlans() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeDoc, setActiveDoc] = useState<string | null>(null);

  async function loadPdf(fileName: string) {
    setLoading(true);
    setImages([]);
    setActiveDoc(fileName);
    try {
      const loadingTask = pdfjsLib.getDocument(`/edProg/${fileName}`);
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

  // --- ДАННЫЕ ---
  const SECTIONS: ProgramData[] = [
    {
      level: "ПЕРШИЙ (БАКАЛАВРСЬКИЙ) РІВЕНЬ ВИЩОЇ ОСВІТИ",
      title: "D3 «МЕНЕДЖМЕНТ»",
      color: "text-blue-600",
      items: [
        { name: '1. Освітня програма "Бізнес на морському транспорті", 2024', file: "op_mng_2024.pdf" },
        { name: '2. Освітня програма "Морський бізнес", 2025', file: "op_mng_2025.pdf" },
        { header: "РЕЦЕНЗІЇ 2024" },
        { name: '3. Рецензія-відгук на ОП "Бізнес на морському транспорті"', file: "rev1_mng_24.pdf" },
        { name: '4. Рецензія-відгук на ОП "Бізнес на морському транспорті"', file: "rev2_mng_24.pdf" },
        { name: '5. Рецензія-відгук на ОП "Бізнес на морському транспорті"', file: "rev3_mng_24.pdf" },
        { name: '6. Рецензія-відгук на ОП "Бізнес на морському транспорті"', file: "rev4_mng_24.pdf" },
        { header: "РЕЦЕНЗІЇ 2025" },
        { name: '7. Рецензія-відгук на ОП "Морський бізнес"', file: "rev1_mng_25.pdf" },
        { name: '8. Рецензія-відгук на ОП "Морський бізнес"', file: "rev2_mng_25.pdf" },
        { name: '9. Рецензія-відгук на ОП "Морський бізнес"', file: "rev3_mng_25.pdf" },
        { name: '10. Рецензія-відгук на ОП "Морський бізнес"', file: "rev4_mng_25.pdf" },
      ],
      guarantor: {
        name: "Наврозова Юлія Олександрівна",
        title: "Кандидат економічних наук, зав.кафедри «Морський бізнес та маркетинг»",
bio: (
  <div>
    <div style={{ float: 'right', marginLeft: '20px', marginBottom: '10px' }}>
      <img 
        src="/lecturers/navrozova.jpg" 
        alt="Наврозова Юлія Олександрівна" 
        style={{ width: '200px', borderRadius: '12px' }} 
      />
    </div>
    <p>
      Гарант програми «Бізнес на морському транспорті» (Морський бізнес) Наврозова Юлія Олександрівна.
    </p>
    <p>
      Кандидат економічних наук, доцент, завідувачка кафедри морського бізнесу та маркетингу.
    </p>
    <p>
      Народилася в місті-герої Одеса в родині співробітників Чорноморського морського пароплавства. У 2001 р. закінчила факультет економіки та управління Одеського
 національного морського університету за спеціальністю «Менеджмент організацій»,
 отримала диплом з відзнакою. У 2005 році захистила кандидатську дисертацію за
 спеціальністю «Економіка транспорту та зв&#39;язку» на тему «Економічні основи управління
 якістю продукції морських торговельних портів У країни». З 2004 року почала свою
 науково-педагогічну діяльність на кафедрі «Економіка підприємства і підприємництво». З
 2017 року після реструктуризації перейшла на кафедру «Підприємництво» (з 2018 року
 кафедра перейменована в «Підприємництво і туризм»), на якій працює по теперішній час.
 Ю.А. Наврозова читає навчальні курси «Управління витратами», «Управління витратами в
 логістиці», «Стратегія бізнесу», «Організація морських та річкових круїзів», «Яхтовий
 круїзний бізнес», «Стандартизація та сертифікації продукції та послуг».
 Брала участь в розробці семи науково-дослідних робіт на замовлення підприємств і
 організацій морської галузі. Має більше 90 наукових та науково-методичних робіт.
 Результати наукових досліджень знайшли відображення в 67 публікаціях, у тому числі 42
 статтях у фахових виданнях, в т.ч. у 5 статтях видань, що входять в наукометричні бази
 Scopus та Web of Science. З 2009 року і по теперішній час є заступником Голови оргкомітету
 Всеукраїнської конференції студентів та молодих вчених «Проблеми і перспективи сталого
 розвитку транспорту».
 З березня 2010 року і по теперішній час виконує роботу відповідального секретаря
 фахового збірника наукових праць «Розвиток методів управління та господарювання на
 транспорті» категорії Б. З 2016 року по теперішній час – Учений секретар комітету з
 розробки стратегії та реформування морських портів України Асоціації портів України
 «Укрпорт».</p>
  </div>
),
},
      studyPlans: [{ year: "2024", fullTime: "plan_mng_24_d.pdf", partTime: "plan_mng_24_z.pdf" },
        { year: "2025", fullTime: "plan_mng_25_d.pdf", partTime: "plan_mng_25_z.pdf" }
      ]
      
    },
    {
      level: "ПЕРШИЙ (БАКАЛАВРСЬКИЙ) РІВЕНЬ ВИЩОЇ ОСВІТИ",
      title: "D5 «МАРКЕТИНГ»",
      color: "text-blue-700",
      items: [
        { name: '1. ОП «Маркетинг і бізнес-аналітика» (бакалавр), 2024', file: "op_mkt_2024.pdf" },
        { name: '2. Маркетинг і бізнес-аналітика на 2025 рік набору', file: "op_mkt_2025.pdf" },
        { header: "РЕЦЕНЗІЇ 2024" },
        { name: '1. Рецензія-відгук на ОП "Маркетинг"', file: "rev1_mkt_24.pdf" },
        { name: '2. Рецензія-відгук на ОП "Маркетинг"', file: "rev2_mkt_24.pdf" },
        { name: '3. Рецензія-відгук на ОП "Маркетинг"', file: "rev3_mkt_24.pdf" },
        { name: '4. Рецензія-відгук на ОП "Маркетинг"', file: "rev4_mkt_24.pdf" },
        { header: "РЕЦЕНЗІЇ 2025" },
        { name: '1. Рецензія-відгук на ОП "Маркетинг"', file: "rev1_mkt_25.pdf" },
        { name: '2. Рецензія-відгук на ОП "Маркетинг"', file: "rev2_mkt_25.pdf" },
        { name: '3. Рецензія-відгук на ОП "Маркетинг"', file: "rev3_mkt_25.pdf" },
        { name: '4. Рецензія-відгук на ОП "Маркетинг"', file: "rev4_mkt_25.pdf" },
      ],
      guarantor: {
        name: "Чебанова Тетяна Євгенівна",
        title: "Кандидат економічних наук, доцент кафедри «Морський бізнес та маркетинг»",
        bio: (
  <div>
    <div style={{ float: 'right', marginLeft: '20px', marginBottom: '10px' }}>
      <img 
        src="/lecturers/chebanova.jpg" 
        alt="Чебанова Тетяна Євгенівна" 
        style={{ width: '200px', borderRadius: '12px' }} 
      />
    </div>
    <p>
      Гарант освітньо-професійної програми «Маркетинг і бізнес-аналітика» Чебанова Тетяна Євгенівна. 
      Кандидат економічних наук, доцент кафедри «Морський бізнес та маркетинг», заступник директора Інституту морського бізнесу.
    </p>
    <p>
      Народилася в місті Джезказган Казахської РСР в родині службовців. В 1990 рр. закінчила Одеський інститут інженерів морського флоту...
      (зараз Одеський національний
морський університет) за спеціальністю «Фінанси та кредит» (кваліфікація - економіст по
фінансам морського транспорту), отримала диплом з відзнакою. У 2019 році захистила
кандидатську дисертацію за спеціальністю 08.00.04 «Економіка та управління
підприємствами (за видами економічної діяльності)». Тема дисертації «Теоретико-
методичні основи оцінки фінансової безпеки підприємств портової діяльності». З 1990
року почала свою науково-педагогічну діяльність на кафедрі «Економіка праці, фінанси та
облік». З 2017 року після реструктуризації перейшла на кафедру «Підприємництво» (з
2018 року кафедра перейменована в «Підприємництво та туризм»), на якій працює по
теперішній час. Чебанова Т.Є. читає навчальні курси «Планування підприємницької
діяльності», «Фінансовий менеджмент», «Інвестиційний менеджмент», «Управління
персоналом», «Інфраструктура товарного ринку», «Облік та оподаткування», «Психологія
ділових відносин». Брала участь в розробці науково-дослідних робіт, має більше 70
наукових та науково-методичних праць, з них: 3 колективних монографії, 7 підручників та
навчальних посібників, більше 25 статей, з яких 22 у фахових виданнях та 3 у виданні, що
входить до наукометричної бази Scopus. Опубліковано більше 40 навчально–методичних
розробок за основними навчальними дисциплінами. Розроблено 10 контентів
дистанційних курсів. З 2022 року є керівником постійно діючого студентського наукового
гуртка «Фінансовий аналітик» Навчально-наукового інституту інформаційних технологій
та інноваційного підприємництва. Є дійсним членом Української асоціації маркетингу.
    </p>
  </div>
)



      },
      studyPlans: [{ year: "2024", fullTime: "plan_mkt_24_d.pdf", partTime: "plan_mkt_24_z.pdf" },
                   { year: "2025", fullTime: "plan_mkt_25_d.pdf", partTime: "plan_mkt_25_z.pdf" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* ЛЕВАЯ КОЛОНКА */}
        <div className="space-y-6 overflow-y-auto max-h-[92vh] pr-4 custom-scrollbar">
          <div className="bg-[#1a2c3d] text-white p-6 rounded-2xl shadow-lg mb-10 flex items-center gap-4">
            <BookOpen size={40} className="text-yellow-400" />
            <h1 className="font-black uppercase text-2xl leading-none">Освітні програми</h1>
          </div>
          {SECTIONS.map((sec, idx) => (
            <ProgramSection key={idx} data={sec} activeDoc={activeDoc} onLoadPdf={loadPdf} />
          ))}
        </div>

        {/* ПРАВАЯ КОЛОНКА */}
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-4 sticky top-5 min-h-[750px] overflow-y-auto max-h-[92vh]">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-full my-40 text-center">
              <Loader2 className="animate-spin text-blue-600" size={48} />
              <p className="mt-4 font-bold text-slate-400 uppercase text-[10px]">Завантаження PDF...</p>
            </div>
          ) : images.length > 0 ? (
            <div className="space-y-4">
              {images.map((src, idx) => (
                <div key={idx} className="relative group">
                  <span className="absolute left-2 top-2 bg-[#1a2c3d] text-white text-[9px] px-2 py-0.5 rounded shadow z-10 font-bold">Стор. {idx+1}</span>
                  <img src={src} className="w-full shadow-md rounded border border-slate-100" alt="page" />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full my-40 opacity-20 text-slate-400 select-none">
              <GraduationCap size={120} />
              <p className="font-black uppercase text-xl mt-4">Оберіть документ</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
















