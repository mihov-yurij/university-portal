import { useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.mjs?url';
import { Loader2, ChevronRight, GraduationCap, Presentation, FileText, Trophy, Users, Lightbulb } from 'lucide-react';
// import { RenderParameters } from 'pdfjs-dist/types/src/display/api';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

interface Document {
  id: number;
  name: string;
  url: string;
  icon: React.ReactNode;
}

const ResearchActivity = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeDoc, setActiveDoc] = useState<string | null>(null);

  const documents: Document[] = [
    { id: 1, name: 'Протокол засідань', url: 'protocol.pdf', icon: <FileText size={16} /> },
    { id: 2, name: 'Тези здобувачів', url: 'tezi.pdf', icon: <Trophy size={16} /> },
    { id: 3, name: 'Участь у міжнародних конкурсах', url: 'konkurs.pdf', icon: <Users size={16} /> },
    { id: 4, name: 'Олімпіада зі спеціальності', url: 'olimp-spec.pdf', icon: <GraduationCap size={16} /> },
    { id: 5, name: 'Гурток "Фінаналітик"', url: 'gurtok.pdf', icon: <Lightbulb size={16} /> },
  ];

  // ЛОГИКА ОДИН-В-ОДИН КАК НА ТВОЕМ СКРИНЕ
  async function loadPdf(fileName: string) {
    setLoading(true);
    setImages([]);
    setActiveDoc(fileName);

    try {
      const loadingTask = pdfjsLib.getDocument(`/docs/${fileName}`); // Путь к твоим pdf
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
          
          const renderContext = {
            canvasContext: context as unknown as CanvasRenderingContext2D,
            viewport: viewport,
          };

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
await page.render(renderContext as any).promise;

          urls.push(canvas.toDataURL());
        }

      }
      setImages(urls);
    } catch (error) {
      console.error("Ошибка загрузки PDF:", error);
    } finally {
      setLoading(false);
    }
  }
return (

  <div className="min-h-screen w-full flex flex-col  maritime-bg dark:bg-[#0f172a] overflow-x-hidden flex flex-col">

    <main className="w-full flex-grow pt-20 sm:pt-24 lg:pt-32 pb-24 sm:pb-32 px-4 sm:px-6">

      <div className="min-h-screen w-full flex flex-col items-center text-center mb-10 sm:mb-16">

        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 mb-4 w-full">

          <Presentation className="text-blue-600 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 shrink-0" />

          <h2 className="text-yellow-400 font-black uppercase italic leading-tight tracking-tight text-2xl sm:text-4xl lg:text-5xl break-words max-w-full px-4">
            Наукова діяльність
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-blue-600 font-black uppercase text-sm sm:text-lg lg:text-xl tracking-wide sm:tracking-widest leading-snug max-w-full px-4">
          Здобувачів вищої освіти
        </p>

        {/* Divider */}
        <div className="h-1 w-14 sm:w-20 lg:w-24 bg-yellow-400 mt-4 rounded-full" />

        {/* Description */}
        <p className="mt-6 text-[#1a2c3d] dark:text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl px-2 whitespace-normal break-words">
          У 2023–2025 роках здобувачі вищої освіти Одеського національного морського університету активно брали участь у міжнародних конкурсах, наукових заходах, стартап-ініціативах та всеукраїнських студентських конкурсах, демонструючи високий рівень професійної підготовки, наукової активності та підприємницького потенціалу.

 У 2024 році здобувачки ОНМУ увійшли до фіналу міжнародного конкурсу SeaFocus International Student Competition, організованого за участю World Trade Centre Turku та профільних асоціацій Фінляндії. Команда у складі Поліни Сапункової, Катерини Чорбаджій, Єлізавети Будкової та Дарії Матвієнко увійшла до п’ятірки найкращих студентських проєктів. Участь у фіналі передбачала серію підготовчих сесій та презентацію інноваційного рішення міжнародному експертному журі. Також у 2025 році студентки Поліна Сапункова та Дар’я Петровська взяли участь у міжнародному Case Competition CBS & Copenhagen Merchants Group у Данії. У 2023 році студентки Карбан Катерина та Яницька Анастасія стали призерками міжнародного конкурсу студентських наукових робіт, здобувши відповідно ІІІ та І місця.

 26 березня 2025 року здобувачі вищої освіти та викладачі ОНМУ взяли участь у міжнародному форумі «UKRAINE SDG NUGGET HOUR», присвяченому Цілям сталого розвитку. Захід об’єднав експертів, дослідників та молодих науковців для обговорення актуальних викликів у сфері сталого розвитку та міжнародної співпраці. Університет представили студенти спеціальностей «Підприємництво та торгівля», «Менеджмент», «Маркетинг», «Туризм» та «Комп’ютерні науки». Організаторкою заходу від України виступила проректорка з наукової роботи, професорка кафедри підприємництва та туризму Ірина Владиславівна Савельєва. Форум став платформою для професійного розвитку студентської молоді, обміну досвідом та формування нового покоління лідерів сталого розвитку.

 Важливим напрямом підтримки студентських ініціатив є діяльність підприємницького клубу Yep! ОНМУ, який функціонує відповідно до положення про діяльність клубу в університеті. У межах роботи клубу щороку проводяться осінні та весняні стартап-семестри, а також конкурси стартап-проєктів. У 2022 році в роботі клубу взяли участь 56 студентів, які представили 15 стартап-проєктів; переможцями стали 21 студент і 7 проєктів. У 2023 році участь у діяльності клубу взяли 51 студент та було представлено 18 стартап-проєктів. У 2024 році активність значно зросла: до роботи долучилися 110 учасників, які розробили 34 стартап-проєкти. У 2025 році в межах діяльності клубу було представлено 13 стартап-проєктів за участю 40 студентів.

 Крім того, упродовж 2023–2025 років в ОНМУ проводився перший тур Всеукраїнського конкурсу студентських наукових робіт за спеціальностями «Підприємництво та торгівля» та «Туризм». У 2023 році у конкурсі взяли участь 10 студентів, з яких 3 стали переможцями. У 2024 році кількість учасників зросла до 19 осіб, а переможцями стали 6 студентів. У 2025 році участь у конкурсі взяли 9 здобувачів, серед яких 3 отримали перемогу.

 Таким чином, участь студентів ОНМУ у міжнародних конкурсах, форумах, стартап-русі та наукових змаганнях підтверджує високий рівень їхньої професійної підготовки, наукової активності та інтеграції університету у міжнародний освітній і науковий простір.
        </p>
        
        <div><img src="/back/zdob.png" alt="zdob" className="w-30 h-30" /></div>
        <p className="mt-6 text-[#1a2c3d] dark:text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl px-2 whitespace-normal break-words">У рамках знов створеного гуртка «Маркетинг та бізнес-аналітика» викладачами кафедри вперше було організовано та проведено у 2025 році конкурс digital контентів «ONMU Digital Battle: Моя спеціальність – бренд». 
Перше місце у номінації «Анімаційне відео» зайняла студентка 3 курсу спеціальності «Маркетинг» Дереглазова Євгенія Олексіївна під керівництвом викладача кафедри Бащак М.М.
</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-6 lg:gap-8 w-full">

        {/* Sidebar */}
        <div className="md:col-span-4 lg:col-span-4 flex flex-col gap-3 order-1">

          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center lg:text-left">
            Оберіть документ
          </p>

          <div className="flex flex-col gap-2">
            {documents.map((doc) => (
              <button
                key={doc.id}
                onClick={() => loadPdf(doc.url)}
                className={`w-full flex justify-between items-center px-4 py-3 sm:py-4 rounded-xl border transition-all duration-300
                  ${activeDoc === doc.url
                    ? 'bg-white border-blue-500 shadow-lg ring-1 ring-blue-500/20'
                    : 'bg-white/80 border-slate-200 hover:border-blue-400'}`}
              >
                <div className="flex items-center gap-3 text-[#1a2c3d] font-bold text-[10px] sm:text-[11px] md:text-sm uppercase tracking-tight overflow-hidden">
                  <span className={activeDoc === doc.url ? 'text-blue-600' : 'text-slate-400'}>
                    {doc.icon}
                  </span>
                  <span className="truncate">
                    {doc.name}
                  </span>
                </div>

                <ChevronRight
                  size={16}
                  className={`flex-shrink-0 ${activeDoc === doc.url ? 'text-blue-600' : 'text-slate-300'}`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Viewer */}
        <div className="md:col-span-8 lg:col-span-8 order-2 w-full">

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col h-[420px] sm:h-[600px] lg:h-[850px] w-full">

            <div className="bg-slate-50/80 px-4 sm:px-6 py-3 border-b border-slate-100">
              <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">
                {loading ? 'Завантаження...' : 'Перегляд'}
              </span>
            </div>

            <div className="flex-grow overflow-y-auto p-2 sm:p-6 lg:p-8 bg-slate-100/50 scrollbar-hide">

              {loading ? (
                <div className="h-full flex items-center justify-center">
                  <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
                </div>
              ) : images.length > 0 ? (
                <div className="flex flex-col gap-4 max-w-full">
                  {images.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt="Page"
                      className="w-full h-auto shadow-md rounded-lg border border-slate-200 bg-white"
                    />
                  ))}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 text-center px-4">
                  <Presentation size={32} className="opacity-30 mb-2" />
                  <p className="text-[10px] sm:text-xs uppercase font-black tracking-widest">
                    Документ не обрано
                  </p>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>
    </main>
  </div>
);
// return (
//   <div className="min-h-screen w-full maritime-bg dark:bg-[#0f172a] overflow-x-hidden flex flex-col">
    
//     <main className="w-full flex-grow pt-20 sm:pt-24 lg:pt-32 pb-40 sm:pb-32 px-4 sm:px-6">
      
//       <div className="max-w-5xl mx-auto flex flex-col items-center text-center mb-10 sm:mb-16">
        
//         {/* Header */}
//         <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 mb-4 w-full">
          
//           <Presentation className="text-blue-600 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 shrink-0" />

//           <h2 className=" text-yellow-400 font-black uppercase italic leading-tight tracking-tight text-2xl sm:text-4xl lg:text-5xl break-words
//               max-w-full px-4">
//             Наукова діяльність
//           </h2>
//         </div>

//         {/* Subtitle */}
//         <p className=" text-blue-600 font-black uppercase text-sm sm:text-lg lg:text-xl tracking-wide sm:tracking-widest leading-snug
//             max-w-full px-4 ">
//           Здобувачів вищої освіти
//         </p>

//         {/* Divider */}
//         <div className="h-1 w-14 sm:w-20 lg:w-24 bg-yellow-400 mt-4 rounded-full" />

//         {/* Description */}
//         <p className=" mt-6 text-[#1a2c3d] dark:text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl px-2 "  >
//          У 2023–2025 роках здобувачі вищої освіти Одеського національного морського університету активно брали участь у міжнародних конкурсах, наукових заходах, стартап-ініціативах та всеукраїнських студентських конкурсах, демонструючи високий рівень професійної підготовки, наукової активності та підприємницького потенціалу.

// У 2024 році здобувачки ОНМУ увійшли до фіналу міжнародного конкурсу SeaFocus International Student Competition, організованого за участю World Trade Centre Turku та профільних асоціацій Фінляндії. Команда у складі Поліни Сапункової, Катерини Чорбаджій, Єлізавети Будкової та Дарії Матвієнко увійшла до п’ятірки найкращих студентських проєктів. Участь у фіналі передбачала серію підготовчих сесій та презентацію інноваційного рішення міжнародному експертному журі. Також у 2025 році студентки Поліна Сапункова та Дар’я Петровська взяли участь у міжнародному Case Competition CBS & Copenhagen Merchants Group у Данії. У 2023 році студентки Карбан Катерина та Яницька Анастасія стали призерками міжнародного конкурсу студентських наукових робіт, здобувши відповідно ІІІ та І місця.

// 26 березня 2025 року здобувачі вищої освіти та викладачі ОНМУ взяли участь у міжнародному форумі «UKRAINE SDG NUGGET HOUR», присвяченому Цілям сталого розвитку. Захід об’єднав експертів, дослідників та молодих науковців для обговорення актуальних викликів у сфері сталого розвитку та міжнародної співпраці. Університет представили студенти спеціальностей «Підприємництво та торгівля», «Менеджмент», «Маркетинг», «Туризм» та «Комп’ютерні науки». Організаторкою заходу від України виступила проректорка з наукової роботи, професорка кафедри підприємництва та туризму Ірина Владиславівна Савельєва. Форум став платформою для професійного розвитку студентської молоді, обміну досвідом та формування нового покоління лідерів сталого розвитку.

// Важливим напрямом підтримки студентських ініціатив є діяльність підприємницького клубу Yep! ОНМУ, який функціонує відповідно до положення про діяльність клубу в університеті. У межах роботи клубу щороку проводяться осінні та весняні стартап-семестри, а також конкурси стартап-проєктів. У 2022 році в роботі клубу взяли участь 56 студентів, які представили 15 стартап-проєктів; переможцями стали 21 студент і 7 проєктів. У 2023 році участь у діяльності клубу взяли 51 студент та було представлено 18 стартап-проєктів. У 2024 році активність значно зросла: до роботи долучилися 110 учасників, які розробили 34 стартап-проєкти. У 2025 році в межах діяльності клубу було представлено 13 стартап-проєктів за участю 40 студентів.

// Крім того, упродовж 2023–2025 років в ОНМУ проводився перший тур Всеукраїнського конкурсу студентських наукових робіт за спеціальностями «Підприємництво та торгівля» та «Туризм». У 2023 році у конкурсі взяли участь 10 студентів, з яких 3 стали переможцями. У 2024 році кількість учасників зросла до 19 осіб, а переможцями стали 6 студентів. У 2025 році участь у конкурсі взяли 9 здобувачів, серед яких 3 отримали перемогу.

// Таким чином, участь студентів ОНМУ у міжнародних конкурсах, форумах, стартап-русі та наукових змаганнях підтверджує високий рівень їхньої професійної підготовки, наукової активності та інтеграції університету у міжнародний освітній і науковий простір.
//         </p>
//       </div>

//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
        
//         <div className="lg:col-span-4 flex flex-col gap-3 order-1">
//           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center lg:text-left">
//             Оберіть документ
//           </p>
//           <div className="flex flex-col gap-2">
//             {documents.map((doc) => (
//               <button
//                 key={doc.id}
//                 onClick={() => loadPdf(doc.url)}
//                 className={`w-full flex justify-between items-center px-4 py-4 rounded-xl border transition-all duration-300
//                   ${activeDoc === doc.url 
//                     ? 'bg-white border-blue-500 shadow-lg ring-1 ring-blue-500/20' 
//                     : 'bg-white/80 border-slate-200 hover:border-blue-400'}`}
//               >
//                 <div className="flex items-center gap-3 text-[#1a2c3d] font-bold text-[10px] sm:text-[11px] uppercase tracking-tight overflow-hidden">
//                   <span className={activeDoc === doc.url ? 'text-blue-600' : 'text-slate-400'}>
//                     {doc.icon}
//                   </span>
//                   <span className="truncate">{doc.name}</span>
//                 </div>
//                 <ChevronRight size={16} className={`flex-shrink-0 ${activeDoc === doc.url ? 'text-blue-600' : 'text-slate-300'}`} />
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="lg:col-span-8 order-2 w-full">
//           <div className="bg-white/95 backdrop-blur-sm rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col h-[450px] sm:h-[700px] lg:h-[850px] w-full">
//             <div className="bg-slate-50/80 px-6 py-3 border-b border-slate-100">
//               <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">
//                 {loading ? 'Завантаження...' : 'Перегляд'}
//               </span>
//             </div>

//             <div className="flex-grow overflow-y-auto p-2 sm:p-8 bg-slate-100/50 scrollbar-hide">
//               {loading ? (
//                 <div className="h-full flex items-center justify-center">
//                   <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
//                 </div>
//               ) : images.length > 0 ? (
//                 <div className="flex flex-col gap-4 max-w-full">
//                   {images.map((url, index) => (
//                     <img 
//                       key={index} 
//                       src={url} 
//                       alt="Page" 
//                       className="w-full h-auto shadow-md rounded-lg border border-slate-200 bg-white" 
//                     />
//                   ))}
//                 </div>
//               ) : (
//                 <div className="h-full flex flex-col items-center justify-center text-slate-400 text-center px-4">
//                   <Presentation size={32} className="opacity-30 mb-2" />
//                   <p className="text-[10px] uppercase font-black tracking-widest">Документ не обрано</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
        
//       </div>
//     </main>
//   </div>

};
export default ResearchActivity;




