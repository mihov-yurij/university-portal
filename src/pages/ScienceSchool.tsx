import { useState } from 'react';
import { GraduationCap, Users, FileCheck, Globe } from 'lucide-react';

const MEMBERS = [
  {
    id: 1,
    name: "Котлубай Олексій Михайлович",
    role: "Науковий керівник",
    degree: "д.е.н., професор",
    photo: "/lecturers/kotlubay.png",
    bio: "Почесний працівник морського та річкового транспорту України. Нагороджений відзнакою МОН України «За наукові  досягнення», професор кафедри «Підприємництво та туризм» Одеського національного морського університету.",
    links: { scholar: "#", orcid: "#", scopus: "#" }
  },
  {
    id: 2,
    name: "Савельєва І.В.",
    role: "Професор кафедри",
    degree: "д.е.н., професор",
    photo: "/lecturers/savelieva.png",
    bio: "Наукові досягнення — більше 60 наукових робіт. Керує міжнародними грантовими програмами в галузі сталого транспорту.",
    interests: "управління контейнерним бізнесом, гендерна рівність",
    links: {
      scholar: "https://scholar.google.com.ua/citations?hl=uk&pli=1&user=tKIZHpgAAAAJ",
      orcid: "https://orcid.org/0000-0002-6492-2130",
      scopus: "https://www.scopus.com/authid/detail.uri?authorId=57192821598"
    }
  },
  {
    id: 3,
    name: "Гребенник Н.Г.",
    role: "Доцент кафедри",
    degree: "к.е.н., доцент",
    photo: "/lecturers/grebenik.png",
    bio: "Близько 120 наукових праць: 5 колективних монографій, 11 підручників й навчальних посібників, 39 статей.",
    interests: "Підприємництво, малий бізнес, кластеризація в економіці",
    links: { scholar: "https://scholar.google.com.ua/citations?user=W45iHLsAAAAJ&hl=ru", orcid: "https://orcid.org/0000-0002-1554-0697", scopus: "#" }
  },
  {
    id: 4,
    name: "Наврозова Ю.О.",
    role: "Зав. кафедри",
    degree: "к.е.н., доцент",
    photo: "/lecturers/navrozova.jpg",
    bio: "91 наукова і науково-методична робота. Результати досліджень впроваджені в діяльність морських підприємств України.",
    interests: "Менеджмент, маркетинг, морський бізнес",
    links: { scholar: "https://scholar.google.com.ua/citations?user=iIse1GoAAAAJ&hl=ru", orcid: "https://orcid.org/0000-0002-6106-2825", scopus: " https://www.scopus.com/authid/detail.uri?authorId=57216725227" }
  },
  {
    id: 5,
    name: "Матвієнко М.В.",
    role: "Доцент кафедри",
    degree: "к.е.н., доцент",
    photo: "/lecturers/matviyenko.jpg",
    bio: "Більше 50 наукових робіт, у тому числі 3 монографії. Досліджує бізнес-моделі сталого розвитку.",
    interests: "Фінансовий менеджмент, голуба економіка, сталий розвиток",
    links: { scholar: "https://scholar.google.com.ua/citations?user=GKpOeNUAAAAJ&hl=uk&authuser=1", orcid: "https://orcid.org/0000-0002-5753-683X", scopus: "https://www.scopus.com/authid/detail.uri?authorId=57225242290" }
  },
  {
    id: 6,
    name: "Щербина В.В.",
    role: "Доцент кафедри",
    degree: "к.е.н., доцент",
    photo: "/lecturers/shcherbina.jpg",
    bio: "69 наукових робіт, 39 статей у фахових виданнях. Співавтор 3 монографій.",
    interests: "Транспортний бізнес, логістика, морська торгівля",
    links: { scholar: "https://scholar.google.com.ua/citations?user=3mDFLXgAAAAJ&hl=ru", orcid: "https://orcid.org/0000-0002-3917-3617", scopus: "https://www.scopus.com/authid/detail.uri?authorId=16514332800" }
  },
  {
    id: 7,
    name: "Ремзіна Наталя Андріївна",
    role: "Доцент кафедри",
    degree: "к.е.н., доцент",
    photo: "/lecturers/remzina.png",
    bio: "•	наукові досягнення - 40 наукових робіт, у тому числі 22 статі у фахових виданнях, у тому числі 3 статті, що входять до наукометричної бази Scopus . Є співавтором 3 монографій•	область інтересів – ланцюжки постачань, логістика, туризм,  бізнес-комунікації, маркетинг, реклама",
    interests: "Логістика, ланцюжки постачань, бізнес-комунікації",
    links: { scholar: "https://scholar.google.com/citations?hl=uk&user=5ry9FSUAAAAJ", orcid: " https://orcid.org/0000-0002-0838-5166", scopus: "https://www.scopus.com/authid/detail.uri?authorId=57433282000" }
  }
];

export default function ScienceSchool() {
  // --- ВСТАВИТЬ СЮДА ---
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeDoc, setActiveDoc] = useState<string | null>(null);


  async function loadPdf(fileName: string) {
    setLoading(true);
    setImages([]);
    setActiveDoc(fileName);
    try {
        const pdfPath = `/science/scpdf/${fileName}`;

         // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const loadingTask = (window as any).pdfjsLib.getDocument(pdfPath);
        const pdf = await loadingTask.promise;
        const urls: string[] = [];
         for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({scale: 1.5});
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
    } catch (e) { console.error(e); }
    setLoading(false);
  }
  return (
    <div className="science-main-bg min-h-screen font-sans overflow-x-hidden">
      <section className="relative bg-[url('/img/cargoship.jpg')] bg-cover bg-center bg-no-repeat text-white py-12 md:py-20">
        <div className="relative container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <GraduationCap className="text-yellow-400" size={32} />
            <p className="text-yellow-400 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">Наукова школа</p>
          </div>
          <h1 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-tight break-words">
            Підприємництво на <br className="hidden md:block" /> морському транспорті
          </h1>
          <div className="flex flex-wrap gap-6 md:gap-10 border-t border-white/10 pt-8">
            <div className="flex items-center gap-3">
              <Users className="text-yellow-400" size={18} />
              <span className="font-bold uppercase text-[9px] md:text-[10px] tracking-widest">2 доктори наук</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-yellow-400" size={18} />
              <span className="font-bold uppercase text-[9px] md:text-[10px] tracking-widest">6 кандидатів наук</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-16 md:space-y-24">
            {MEMBERS.map((person) => (
              <div key={person.id} className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                <div className="w-full md:w-1/3">
                  <img src={person.photo} alt={person.name} className="rounded-[2rem] md:rounded-[3rem] shadow-2xl border-4 md:border-8 border-slate-50 w-full aspect-[4/5] object-cover" />
                </div>
                <div className="w-full md:w-2/3">
                  <span className="text-amber-500 font-black uppercase text-[10px] tracking-[0.2em] mb-2 block">{person.role}</span>
                  <h3 className="text-2xl md:text-3xl font-black text-[#1a2c3d] uppercase mb-2 leading-tight">{person.name}</h3>
                  <p className="text-slate-400 font-bold italic mb-4 md:mb-6 text-sm md:text-base">{person.degree}</p>
                  <p className="text-slate-600 leading-relaxed text-justify mb-6 md:mb-8 text-sm md:text-base">{person.bio}</p>
                  {person.interests && (
                    <div className="mb-6 md:mb-8">
                      <p className="text-[10px] font-black text-[#1a2c3d] uppercase mb-2 tracking-widest">Область інтересів</p>
                      <p className="text-xs md:text-sm text-slate-500">{person.interests}</p>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {Object.entries(person.links).map(([key, url]) => (
  url !== "#" && (
    <a
      key={key}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`px-4 py-2 border rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 
        ${key === 'scholar' ? 'bg-blue-50 border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white' : ''}
        ${key === 'orcid' ? 'bg-green-50 border-green-200 text-green-600 hover:bg-green-600 hover:text-white' : ''}
        ${key === 'scopus' ? 'bg-amber-50 border-amber-200 text-amber-600 hover:bg-amber-600 hover:text-white' : ''}
      `}
    >
      {key}
    </a>
  )
))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-xl md:text-3xl font-black text-[#1a2c3d] uppercase mb-10 md:mb-12 flex items-center gap-4">
            <span className="w-8 md:w-12 h-1 bg-yellow-500"></span>
            Науково-дослідна робота кафедри
          </h2>
          <div className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl border border-slate-100 mb-8 md:mb-10">
            <p className="text- font-black text-[9px] md:text-3x1 tracking-widest uppercase mb-4">Науково-дослідна тема, над якою працює колектив кафедри «Підприємництво та туризм»: </p>
            <h4 className="text-lg md:text-xl font-black text-[#1a2c3d] uppercase leading-tight mb-6 break-words">
              Економіко-організаційне обґрунтування розробки маркетингових стратегій розвитку підприємств морського,туристичного та готельно-ресторанного бізнесу
            </h4>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-2x1 font-bold uppercase text-slate-400 mb-8 pb-8 border-b">
              <span>номер державної реєстрації: 0123U101181</span>
              <span>Керівник: доц. Наврозова Ю.О., термін виконання: 01.2023-12.2025 рр.</span>
            </div>
            <div><p>У 2025 році був підготовлений звіт з НДР «Економіко-організаційне обґрунтування розробки маркетингових стратегій розвитку підприємств морського, туристичного та готельно-ресторанного бізнесу» (реєстраційний номер 0123U101181).
Результати НДР можуть бути впровадженні у практичну діяльність підприємств шляхом використання обґрунтованих маркетингових стратегії, спрямованих на забезпечення сталого розвитку в умовах мінливого бізнес-середовища. Аналіз сучасних тенденцій у галузях морського, туристичного та готельно-ресторанного бізнесу виявило необхідність розробки та реалізації ефективних маркетингових стратегій для підприємств, щоб протистояти зростаючій конкуренції та врахувати геополітичні та економічні виклики. 
Впровадження виконаних розробок сприятиме підвищенню ефективності діяльності підприємств морського, туристичного та готельно-ресторанного бізнесу на основі використання маркетингових стратегій розвитку. 
За темою НДР опубліковано 16 наукових праць загальним обсягом 15,1 др. арк. 
Результати НДР впроваджуються в навчальний процес у тексти лекцій з дисциплін: «Основи підприємництва та торгівлі», «Підприємництво», «Інфраструктура портового бізнесу», «Основи морського бізнесу», «Економіка підприємства транспорту», «Бізнес-середовище морської галузі», «Морська торгівля», «Облік та оподаткування», «Інноваційне підприємництво та розвиток стартапів», «Стратегія бізнесу», «Управління витратами та ціноутворення», «Планування підприємницької діяльності», «Бізнес-процеси в ланцюгах постачання», «Галузеве підприємництво», «Основи маркетингу», «Маркетингове ціноутворення», «Маркетинг інновацій» для здобувачів вищої освіти освітньо-професійних програм «Бізнес на морському транспорті», «Морський бізнес», «Маркетинг та бізнес аналітика».</p>
              </div>
<div className="flex flex-row gap-4 items-center mt-8">
  <button 
    className="flex items-center gap-2 px-8 py-3 border border-blue-300 bg-blue-50 text-blue-700 font-medium rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm"

    onClick={() => loadPdf('akt_1.pdf')}
  >
    <FileCheck size={20} />
    <span>Акт впровадження 1</span>
  </button>

  <button 
    className="flex items-center gap-2 px-8 py-3 border border-amber-300 bg-amber-50 text-amber-700 font-medium rounded-2xl hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-sm"

    onClick={() => loadPdf('akt_2.pdf')}
  >
    <FileCheck size={20} />
    <span>Акт впровадження 2</span>
  </button>
</div>
      {activeDoc && (
  <div className="mt-10 p-6 bg-white rounded-xl shadow-lg border">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-xl font-bold text-[#1a2c3d]">Документ: {activeDoc}</h3>
      <button 
        onClick={() => { setImages([]); setActiveDoc(null); }}
        className="text-red-500 hover:underline font-medium"
      >
        Закрыть просмотр
      </button>
    </div>

    {loading ? (
      <div className="flex flex-col items-center py-10">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#1a2c3d] mb-4"></div>
        <p className="text-slate-500">Загрузка страниц документа...</p>
      </div>
    ) : (
      <div className="flex flex-col gap-8 bg-slate-100 p-4 rounded-lg">
        {images.map((img, i) => (
          <img 
            key={i} 
            src={img} 
            className="w-full h-auto shadow-md border bg-white" 
            alt={`Page ${i + 1}`} 
          />
        ))}
      </div>
    )}
  </div>
)}
   
</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
             <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                <p className="text-blue-600 font-black text-[9px] md:text-[10px] tracking-widest uppercase mb-4">Заявки на участь у міжнародних проектах</p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Globe className="shrink-0 text-amber-500" size={20} />
                    <p className="text-xs md:text-sm font-bold text-[#1a2c3d] leading-snug italic">Савельєва І.В. Danube Transnational Program “Integrating Danube Region into Smart& Sustainable Intermodal Transport Chains”</p>
                  </div>
                  <div className="flex gap-4">
                    <Globe className="shrink-0 text-amber-500" size={20} />
                    <p className="text-xs md:text-sm font-bold text-[#1a2c3d] leading-snug italic">Наврозова Ю.О. Project number:	Nansen EDU-2025/10063. Project title: Skills Chain: AI-Driven Green & Digital Maritime Education for Ukraine</p>
                  </div>
                </div>
             </div>
             
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
