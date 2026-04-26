import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ShieldCheck, Download, FileText } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden">
      
      {/* ФОН: Растянут по оси X и Y */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/back/business.jpg" 
          alt="Background" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
      </div>

      {/* КОНТЕНТ */}
      <div className="relative z-10 flex-grow pt-1"> {/* Минимальный отступ под потолок */}
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
          
          {/* Навигация в самом углу */}
          <Link 
            to="/" 
            className="absolute left-4 md:left-8 top-1 inline-flex items-center text-yellow-400 hover:text-white transition-colors uppercase text-[9px] font-bold tracking-widest z-20"
          >
            <ChevronLeft size={12} className="mr-1" />
            Назад на головну
          </Link>

          {/* ЗАГОЛОВОК: ПОД САМЫЙ ПОТОЛОК */}
          <header className="flex flex-col items-center pt-0 mt-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <ShieldCheck className="text-yellow-400" size={12} />
              <span className="text-yellow-400 font-bold uppercase tracking-[0.2em] text-[8px]">
                Офіційна публікація
              </span>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter text-center leading-none">
              Історія кафедри
            </h1>
            <div className="h-0.5 w-10 bg-yellow-400 mt-1.5 rounded-full"></div>
          </header>

          {/* Центральный блок контента */}
          <main className="max-w-4xl mx-auto py-12">
  <FadeIn>
    <div className="bg-white/5 backdrop-blur-2xl p-10 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl">
      
      {/* Спеціальності */}
      <div className="text-center mb-12">
        <h2 className="text-white/60 uppercase tracking-[0.3em] text-[10px] font-bold mb-4">
          Напрямки підготовки
        </h2>
        <p className="text-2xl md:text-3xl font-black text-white uppercase italic leading-none tracking-tighter">
          Підприємництво • Менеджмент • Маркетинг
        </p>
        <div className="h-1 w-20 bg-yellow-400 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Контент */}
      <div className="max-w-2xl mx-auto space-y-8">
        <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light text-left border-l-4 border-yellow-400/30 pl-6">
          Як самостійний підрозділ кафедра була створена у <span className="text-yellow-400 font-bold">вересні 2016 року</span>, 
          але її витоки сягають корінням 30-років минулого сторіччя, коли були створені кафедра соціально-економічних диcциплін та експлуатації морського транспорту.
                  «Підприємництво і економіко-математичне моделювання» була створена шляхом реструктуризації наступних трьох кафедр факультету економіки і управління: «Економіка підприємства і підприємництво», «Економічна теорія і кібернетика» та «Фінансово-економічна безпека , облік та аудит» та також стала випускаючою за спеціальністю
                  «Підприємництво, торгівля та біржова діяльність». Завідувачем кафедри став багаторічний керівник кафедри «Економічна теорія і кібернетика», доктор економічних наук,професор Геннадій Сергійович Махуренко.  У 2018 році кафедра стала випускаючою ще за одною спеціальністю – 242
 «Туризм», та отримала свою сучасну назву –  «Підприємництво та туризм». Завідувачем кафедри була призначена доктор економічних наук, професор Савельєва Ірина Владиславівна.Розвиток 
 кафедри продовжується через створення нових освітніх програм на існуючих спеціальностях на засадах міждисциплінарності, інноваційності та студентоорієнтованості. З 2022 року кафедру очолює кандидат економічних, доцент Наврозова Юлія Олександрівна, під керівництвом якої у 2023 році була започаткована нова освітня програма «Маркетинг  та  
 бізнес-аналітика», а в поточному році прийнято рішення про започаткування освітньої програми «Готельно-ресторанна справа».Силами кафедри організовується з 2009 року  Всеукраїнська конференція студентів та молодих вчених «Проблеми і перспективи розвитку транспорту»  (голова оргкомітету – професор Савельєва І.В., заступник оргкомітету – зав. каф., доцент Наврозова Ю.О., 
секретар – доцент Щербина В.В.).  23 квітня 2025 року відбудеться вже ХІІІ конференція з  акцентом на сталий розвиток транспорту.Здобувачі вищої освіти та викладачі кафедри беруть участь
у міжнародних форумах, присвячених Цілям сталого розвитку (SDG). Амбасадором та організатором виступає професор Савельєва В.В. На кафедрі працюють викладачі, які відповідають за випуск фахового збірника наукових праць категорії Б «Розвиток методів управління  та  господарювання  на
транспорті», який заснований у 1996 році відомим вченим та видатним вчителем , багато  учнів якого зараз працюють на кафедрі – доктором економічних наук,професором В.І.Чекаловцем, який був
першопрохідцем  підприємницької  науки в  транспортній галузі. Головним редактором збірнику є проректор з НР Савельєва І.В. Відповідальним секретарем є зав. кафедри Наврозова Ю.О. 
                       У 2019 році у відповідь на виклики часу та запит на інноваційні компетенції у студентів на
                   кафедрі був створений підприємницький клуб  YEP! ОНМУ , який об’єднав креативну студентську мо-
                  лодь, ініціативних викладачів та передових бізнесменів. Кожний семестр проводиться конкурс стар-
                  тап-проєктів . Очолює таку ініціативу доцент Гребенник Н.Г. За останні 5 роки колективом кафедри
                   було видано 6 монографíй, 2 пíдручника, опублìковано 22 статтí в наукових журналах, якí індексу-
                  ються у Scopus та/або WoS та майже 90 наукових статей у фахових  журналах категорíї Б.Мíж ОНМУ та
                   провíдним європейським університетом Copenhagen Business School ( Данія )  укладений  унікальний
                  договір, в рамках якого студенти ОП «Бізнес на морському транспорті» та ОП «Морський бізнес» без-
                  коштовно навчаються протягом семестру в CBS.Кафедра живе та розвивається. І цей розвиток можливий 
                   лише завдяки плідній роботі її викладацького складу.</p>

        {/* ПРАВИЛЬНЕ КЕРІВНИЦТВО */}
        <div className="flex items-center gap-4 pt-6">
          <div className="h-12 w-[1px] bg-white/20"></div>
          <div>
            <p className="text-yellow-400 font-black uppercase text-lg tracking-tight leading-tight">
              Наврозова Юлія Олександрівна
            </p>
            <p className="text-white/50 text-[10px] uppercase tracking-[0.2em] mt-1 font-bold">
              Завідувач кафедри / Доцент / Кандидат економічних наук
            </p>
          </div>
        </div>
      </div>

      {/* Кнопки */}
      <div className="flex flex-wrap gap-4 justify-center mt-16">
        <a href="/docs/plan_2025.pdf" target="_blank" className="flex items-center bg-white text-blue-900 px-10 py-4 rounded-2xl font-black hover:bg-yellow-400 transition-all duration-300 uppercase text-xs tracking-tighter">
          <FileText size={18} className="mr-2" /> Документація
        </a>
        <a href="/docs/plan_2025.pdf" download className="flex items-center border-2 border-white/20 text-white px-10 py-4 rounded-2xl font-black hover:bg-white/10 transition-all uppercase text-xs tracking-tighter">
          <Download size={18} className="mr-2" /> Скачати PDF
        </a>
      </div>

    </div>
  </FadeIn>
</main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
