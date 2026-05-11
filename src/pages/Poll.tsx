import { useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.mjs?url';
import { FileText, Loader2, GraduationCap, Download } from 'lucide-react';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;



export default function Poll() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeDoc, setActiveDoc] = useState<string | null>(null);

  async function loadPdf(fileName: string) {
    setLoading(true);
    setImages([]);
    setActiveDoc(fileName);
    try {
      // Путь должен соответствовать расположению файлов в public
      const pdfPath = `/public/opit/${fileName}`;
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
  <div className="science-main-bg min-h-screen font-sans overflow-x-hidden">
         <section className="py-16 bg-[#1a2c3d] text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <GraduationCap className="text-yellow-400" size={32} />
            <p className="text-yellow-400 font-bold uppercase tracking-widest text-sm">освітній процес</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">опитування</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">            
<div className="w-full md:w-1/2">

  {/* Заменили text-lg на text-base для основного текста */}
  <div className="text-base text-black leading-relaxed text-justify mb-12">
   
            <p className="text-[#1a2c3d] dark:text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
  Щорічно освітні програми підлягають перегляду згідно{" "}

  <button
    onClick={() => loadPdf('pologennya1.pdf')}>
        <span className="text-base font-black text-blue-500 uppercase tracking-[0.2em] mb-4">Положення про порядок розроблення та періодичний перегляд освітніх програм</span>
  </button>

  {" "}в Одеському національному морському університеті для встановлення
  досяжності, реалістичності та адекватності призначених кредитів,
  визначених результатів навчання та розрахованого навчального
  навантаження.</p>
                   <div className="mt-6">  
                       <img src="/img/bulgaria1.png" alt="Science" className="rounded-3xl shadow-lg border w-full h-auto" />
                 </div>
                 <p className="text-[#1a2c3d] dark:text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
            Згідно{" "}
              <button
    onClick={() => loadPdf('pologennya.pdf')}>
        <span className="text-base font-black text-blue-500 uppercase tracking-[0.2em] mb-4">Положення про моніторинг стейкхолдерів</span>
  </button>

                     {" "}щодо якості освітньої діяльності одеського національного морського університету метою моніторингу стейкхолдерів щодо якості освіти і освітньої діяльності є отримання об’єктивної інформації щодо очікувань та задоволення здобувачами вищої освіти, випускниками, роботодавцями та іншими зацікавленими особами якістю освіти і станом освітнього процесу і розробка, забезпечення зворотного зв’язку між усіма учасниками освітнього процесу і розробка пропозицій щодо його удосконалення. 
                 </p>
                <p className="text-[#1a2c3d] dark:text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">Обговорення змісту ОП «Морський бізнес» на основі кращих практик у{" "}
                                  <button
    onClick={() => loadPdf('pologennya.pdf')}>
        <span className="text-base font-black text-blue-500 uppercase tracking-[0.2em] mb-4"> 2025-2026</span>
  </button> {" "}н.р.

Під час робочої зустрічі з колегами Софійського університету ім. Св. Климента Охридського завідувачка кафедри підприємництва та туризму, гарант ОП «Морський бізнес» Юлія Наврозова обговорила зміст освітніх програм факультету економіки та бізнес-адміністрування: структуру, освітні компоненти та підходи до підготовки фахівців у сфері бізнесу та менеджменту.
Компоненти для інтеграції в ОП «Морський бізнес»
•	Стала та циркулярна економіка
•	Сталий розвиток і КСВ (корпоративна соціальна відповідальність)
•	Моделі сталого бізнесу
•	Стійкі енергетичні ресурси та управління
•	Міжнародне підприємництво
•	Вступ до штучного інтелекту
 </p>
 <p className="text-[#1a2c3d] dark:text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">Обговорення змісту ОП у{" "}
                                 <button
    onClick={() => loadPdf('pologennya.pdf')}>
        <span className="text-base font-black text-blue-500 uppercase tracking-[0.2em] mb-4"> 2024-2025</span>
  </button> {" "}н.р.
Гаранти освітніх програм "Бізнес на морському транспорті", "Підприємницька діяльність на морському транспорті", "Маркетинг та бізнес-аналітика" провели зустріч зі здобувачами вищої освіти усіх курсів. Обговорювалися питання структурної та логічної побудови переліку та обсягу обов’язкових компонентів, видів практик, значущості неформальної освіти та можливості формування індивідуальної освітньої траєкторії.
☝️ Здобувачів було ознайомлено з процедурою обрання вибіркових освітніх компонентів, порядком реалізації академічної мобільності, а також звернено увагу на анкету оцінювання якості освітньої діяльності.
Здобувачі освіти мали можливість ставити питання гарантам, завідувачці, викладачам кафедри та вносити пропозиції щодо удосконалення програм та організації освітнього процесу.
 </p>
  <div className="mt-6">  
                       <img src="/public/lecturers/cheban.png" alt="Science" className="rounded-3xl shadow-lg border w-full h-auto" />
                 </div>
  <p className="text-[#1a2c3d] dark:text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">Моніторинг задоволеності освітніми послугами у{" "}
    <button
    onClick={() => loadPdf('report10-23.pdf')}>
        <span className="text-base font-black text-blue-500 uppercase tracking-[0.2em] mb-4"> 2023-2024</span>
  </button> {" "}н.р.

Гарантом ОП "Бізнес на морському транспорті", зав. кафедрою Наврозовою Ю.О. разом з кураторами та заступником директора ННІ ІТІП була проведена зустріч зі здобувачами вищої освіти ОП "Бізнес на морському транспорті" 1-4 курсів з метою з’ясування рівня їх задоволеності освітніми послугами, їх думки відносно наповнення навчального плану ОП.
Здобувачі висказали задоволеність організацією освітнього процесу та якістю ОП, методами навчання і викладання та об’єктивністю оцінювання, освітнім середовищем та наявними матеріальними ресурсами, а також дотриманням принципів академічної доброчесності.
</p>
 <div className="mt-6">  
                       <img src="/public/lecturers/2021.png" alt="Science" className="rounded-3xl shadow-lg border w-full h-auto" />
                 </div>
  <p className="text-[#1a2c3d] dark:text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">Зустріч гарантів з Головою та членами Ради студентського самоврядування ННІІТІП у{" "} <button
    onClick={() => loadPdf('pologennya.pdf')}>
        <span className="text-base font-black text-blue-500 uppercase tracking-[0.2em] mb-4"> 2023-2024</span>
  </button>{" "} н.р.
З метою розвитку освітньо-професійних програм спеціальностей 075 «Маркетинг» і 076 «Підприємництво та торгівля» 07.11.2023 р. відбулася зустріч гарантів з Головою та членами Ради студентського самоврядування ННІІТІП ОНМУ.
Головне питання зустрічі – обговорення змін в освітньо-професійних програмах 2024 року набору: на бакалаврському рівні «Бізнес на морському транспорті» (спеціальність 076 «Підприємництво та торгівля», гарант – доц. Наврозова Ю.О.); «Маркетинг і бізнес-аналітика» (спеціальність 075 – Маркетинг, гарант – доц. Чебанова Т.Є.); на магістерському рівні «Підприємницька діяльність на морському транспорті» (спеціальність 076 «Підприємництво та торгівля», гарант – проф. Котлубай О.М.).
Гаранти представили свої проєкти програм та мотивували здобувачів вищої освіти до активнішого залучення до процесу розбудови системи внутрішнього забезпечення якості освіти в університеті.
Голова студентського самоврядування Ксенія Яворська та його члени висловили свої пропозиції щодо поліпшення структури і змісту ОПП, а саме укрупнити обсяги освітніх компонент, збільшивши кредити, та зменшити загальну їх кількість, розширити перелік вибіркових освітніх компонент. Здобувачка Каткова Ганна запропонувала підсилити морську спрямованість ОПП.
Впевнені, що такі зустрічі корисні як для гарантів та груп забезпечення, так і для здобувачів вищої освіти.
</p> <div className="mt-6">  
                       <img src="/public/lecturers/2021.png" alt="Science" className="rounded-3xl shadow-lg border w-full h-auto" />
                 </div>
    <p className="text-[#1a2c3d] dark:text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">Зустріч викладачів кафедри підприємництва та туризму{" "}<button
    onClick={() => loadPdf('pologennya.pdf')}>
        <span className="text-base font-black text-blue-500 uppercase tracking-[0.2em] mb-4"> з представниками морського бізнесу</span>
  </button>{" "}24 жовтня 2023 року відбулася зустріч викладачів кафедри підприємництва та туризму з представниками морського бізнесу.
В обговоренні напрямків удосконалення освітньої програми "Маркетинг та бізнес-аналітика" спеціальності 075 Маркетинг, Освітніх програм "Бізнес на морському транспорті ", "Підприємницька діяльність на морському транспорті" спеціальності 076 Підприємництво та торгівля та 242 Туризм прийняли участь:
Комерційний директор сюрвеєрської компанії ТОВ "БАСТІКО УКРАЇНА" Олексій Вікторович Ільїн
Менеджер з транспортно-експедиторскої діяльності компанії ТОВ Керріленд Логістикс ЛТД Володимир Леонідович М'якушко
Директор ТОВ "Транс-Сервіс-КТТ" Олег Віталійович Заболотний
Комерційний директор транспортно-експедиторської компанії ПАТ "ІллічівськЗовнішТранс" Олександр Анатолійович Бахарев
Директор ТОВ "Укрекспортер" Ігор Вікторович Поляков
Провідний консультант відділу курортів та рекреації управління туризму, рекреації та курортів Департаменту фізичної культури, спорту і туризму Одеської обласної державної адміністрації Ігор Олегович Бориславський.
З метою забезпечення відповідності програмних результатів навчання потребам ринку було рекомендовано додати нові освітні компоненти, скорегувати назви існуючих освітніх компонент та розширити перелік вибіркових.
Стейкхолдери висловили готовність укласти договори та співпрацювати з університетом в сфері розвитку навчальних зв'язків, підвищення рівня освітньої, професійної та наукової підготовки фахівців, проводити лекції та майстер-класи, сприяти практичній підготовці здобувачів вищої освіти на підприємствах галузі в ході навчальної, виробничої та переддиломної практик.
.</p> <div className="mt-6">  
                       <img src="/public/lecturers/2021.png" alt="Science" className="rounded-3xl shadow-lg border w-full h-auto" />
                 </div>
    <p className="text-[#1a2c3d] dark:text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">Обговорення освітньої програми у {" "}<button
    onClick={() => loadPdf('pologennya.pdf')}>
        <span className="text-base font-black text-blue-500 uppercase tracking-[0.2em] mb-4"> 2021-2022</span>
  </button>{" "} н.р.

Гарант освітньої програми "Бізнес на морському транспорті" спеціальності 076 "Підприємництво, торгівля та біржова діяльність", доцент Юлія Наврозова, члени робочої групи доценти Вероніка Щербина, Наталія Гребенник, власник і директор ТОВ "Штеф Фрейт Менеджмент" Олександр Штефанец, завідувачка кафедри підприємництва туризму Ірина Савельєва, викладачі кафедр ОНМУ, стейкхолдери генеральний директор Андрій Кузьменко, директор і співзасновник компанії BPG Shipping &Kronos Bulkers Геннадій Іванов, керівник Центру підтримки бізнесу і консультант Центру бізнес-освіти при Одеській регіонально-торгово-промисловій палаті Олександр Балога сумісно обговорили напрямки покращення освітньої програми та напрацювали рекомендації щодо їх оновлення.
Було рекомендовано переглянути склад обов'язкових дисциплін за ОПП у напрямі можливості включення дисциплін морської спрямованості, що відповідає сучасним потребам морського бізнесу та відповідає місії та стратегії ОНМУ, доповнити фахові компетентності спеціальності та розширити перелік вибіркових дисциплін. У ході зустрічі було досягнуто домовленості щодо розширення баз практики та залучення фахівців-практиків до навчального процесу здобувачів вищої освіти спеціальності 076.
</p> <div className="mt-6">  
                       <img src="/public/lecturers/2021.png" alt="Science" className="rounded-3xl shadow-lg border w-full h-auto" />
                 </div>

              </div>
   <div className="space-y-4">

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