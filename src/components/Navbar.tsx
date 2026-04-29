import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';

// const Navbar = () => {
//   const [activeMenu, setActiveMenu] = useState<string | null>(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//    const menuData = {
//     about: {
//       title: "Про кафедру",
//       items: ["Офіційні документи", "Історія кафедри", "Викладацький склад", "Підвищення кваліфікації", "Матеріально-технічне забезпечення"]
//     },
//     education: {
//       title: "Освітній процес",
//       items: ["Освітні програми", "Навчальні плани", "Силабуси", "Практика", "Опитування", "Відгуки випускників"]
//     },
//     science: {
//       title: "Наукова діяльність",
//       items: ["Підготовка наукових кадрів", "Наукова школа та НДР", "Наукові публікації", "Наукова діяльність здобувачів", "Звіт з наукової роботи", "Академічна доброчесність"]
//     },
//     international: {
//       title: "Міжнародна діяльність",
//       items: ["Міжнародні проєкти", "Міжнародна академічна мобільність", "Міжнародне стажування викладачів", "Звіт з міжнародної діяльності"]
//     }
//   };

//   return (
//     <nav className="bg-[#1a2c3d] text-white shadow-xl sticky top-0 z-50 border-b border-white/10 font-sans">
//       <div className="w-full pl-12 pr-6 flex justify-between items-center py-3">
        
//               <Link to="/" className="flex px-10 items-center gap-3 group shrink-0 no-underline">
//           <img src="/favicon-maritime.png" alt="Logo" className="h-10 w-10 md:h-12 md:w-12 rounded-lg shadow-lg" />
//           <div className="flex flex-col">
//             <span className="font-black text-sm md:text-lg  uppercase leading-none group-hover:text-yellow-400 transition-colors">
//               Морський Бізнес
//             </span>
//             <span className="text-[9px] text-yellow-400 font-bold uppercase tracking-wider">
//               та Маркетинг • ОНМУ
//             </span>
//           </div>
//         </Link>

//                 <div className="hidden lg:flex ml-auto space-x-4 xl:space-x-6 items-center font-bold text-[10px] xl:text-[11px] uppercase tracking-widest">

//           <Link to="/" className="hover:text-yellow-400 transition  py-4 no-underline">Головна</Link>

//           {Object.entries(menuData).map(([key, menu]) => (
//             <div 
//               key={key}
//               className="relative group"
//               onMouseEnter={() => setActiveMenu(key)}
//               onMouseLeave={() => setActiveMenu(null)}
//             >
//               <button className="flex items-center gap-1 hover:text-yellow-400 transition py-4 uppercase outline-none bg-transparent border-none text-white font-bold cursor-pointer">
//                 {menu.title} 
//                 <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === key ? 'rotate-180' : ''}`} />
//               </button>

//               {activeMenu === key && (
//                 <div className="absolute top-full left-0 w-72 bg-white text-slate-800 shadow-2xl rounded-b-xl py-4 flex flex-col border-t-4 border-yellow-500 animate-in fade-in slide-in-from-top-2 duration-200">
//                   {menu.items.map((item, idx) => (
//                  <Link 
//   key={idx} 
//   to={item === "Викладацький склад" ? "/faculty" : `/${key}/${idx}`} 
//   className="px-6 py-2.5 text-[12px] font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-700 transition border-b border-slate-50 last:border-0 no-underline"
//   onClick={() => setActiveMenu(null)}

// >
//   {item}
// </Link>

//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}

//           <Link to="/contacts" className="hover:text-yellow-400 transition pr-10 py-4 no-underline">Контакти</Link>
//         </div>

//         <Link 
//           to="/admission" 
//           className="hidden md:flex items-center gap-2 bg-yellow-500 text-[#1a2c3d] px-4 py-2 rounded-lg font-black text-[10px] uppercase shadow-lg hover:bg-yellow-400 transition-all cursor-pointer no-underline border-none"
//         >
//           <Phone size={14} />
//           <span>Приймальна</span>
//         </Link>

//         <button className="lg:hidden p-2 text-white bg-transparent border-none cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//           {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {isMobileMenuOpen && (
//         <div className="lg:hidden bg-[#1a2c3d] border-t border-white/10 px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
//           {Object.entries(menuData).map(([key, menu]) => (
//             <div key={key} className="space-y-2">
//               <p className="text-yellow-400 text-[10px] font-black uppercase tracking-widest">{menu.title}</p>
//               <div className="flex flex-col space-y-2 pl-4 border-l border-white/10">
//                 {menu.items.map((item, idx) => (
//                   <Link 
//                     key={idx} 
//                     to={item === "Викладацький склад" ? "/faculty" : `/${key}/${idx}`} 
//                     className="text-sm py-1 text-slate-200 hover:text-yellow-400 transition no-underline"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     {item}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           ))}
//           <Link 
//             to="/admission" 
//             className="block bg-yellow-500 text-[#1a2c3d] text-center py-4 rounded-xl font-black uppercase text-sm tracking-widest mt-4 no-underline"
//             onClick={() => setIsMobileMenuOpen(false)}
//           >
//             Приймальна комісія
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Вспомогательная функция для определения путей
  const getLinkPath = (key: string, item: string, idx: number) => {
    if (item === "Викладацький склад") return "/faculty";
    if (item === "Міжнародна академічна мобільність") return "/international/mobile";
    return `/${key}/${idx}`;
  };

  const menuData = {
    about: {
      title: "Про кафедру",
      items: ["Офіційні документи", "Історія кафедри", "Викладацький склад", "Підвищення кваліфікації", "Матеріально-технічне забезпечення"]
    },
    education: {
      title: "Освітній процес",
      items: ["Освітні програми", "Навчальні плани", "Силабуси", "Практика", "Опитування", "Відгуки випускників"]
    },
    science: {
      title: "Наукова діяльність",
      items: ["Подготовка наукових кадрів", "Наукова школа та НДР", "Наукові публікації", "Наукова діяльність здобувачів", "Звіт з наукової роботи", "Академічна доброчесність"]
    },
    international: {
      title: "Міжнародна діяльність",
      items: ["Міжнародні проєкти", "Міжнародна академічна мобільність", "Міжнародне стажування викладачів", "Звіт з міжнародної діяльності"]
    }
  };

  return (
    <nav className="bg-[#1a2c3d] text-white shadow-xl sticky top-0 z-50 border-b border-white/10 font-sans">
      <div className="w-full pl-12 pr-6 flex justify-between items-center py-3">
        
        <Link to="/" className="flex px-10 items-center gap-3 group shrink-0 no-underline">
          <img src="/favicon-maritime.png" alt="Logo" className="h-10 w-10 md:h-12 md:w-12 rounded-lg shadow-lg" />
          <div className="flex flex-col">
            <span className="font-black text-sm md:text-lg uppercase leading-none group-hover:text-yellow-400 transition-colors">
              Морський Бізнес
            </span>
            <span className="text-[9px] text-yellow-400 font-bold uppercase tracking-wider">
              та Маркетинг • ОНМУ
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex ml-auto space-x-4 xl:space-x-6 items-center font-bold text-[10px] xl:text-[11px] uppercase tracking-widest">
          <Link to="/" className="hover:text-yellow-400 transition py-4 no-underline">Головна</Link>

          {Object.entries(menuData).map(([key, menu]) => (
            <div 
              key={key}
              className="relative group"
              onMouseEnter={() => setActiveMenu(key)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 hover:text-yellow-400 transition py-4 uppercase outline-none bg-transparent border-none text-white font-bold cursor-pointer">
                {menu.title} 
                <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === key ? 'rotate-180' : ''}`} />
              </button>

              {activeMenu === key && (
                <div className="absolute top-full left-0 w-72 bg-white text-slate-800 shadow-2xl rounded-b-xl py-4 flex flex-col border-t-4 border-yellow-500 animate-in fade-in slide-in-from-top-2 duration-200">
                  {menu.items.map((item, idx) => (
                    <Link 
                      key={idx} 
                      to={getLinkPath(key, item, idx)} 
                      className="px-6 py-2.5 text-[12px] font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-700 transition border-b border-slate-50 last:border-0 no-underline"
                      onClick={() => setActiveMenu(null)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link to="/contacts" className="hover:text-yellow-400 transition pr-10 py-4 no-underline">Контакти</Link>
        </div>

        <Link 
          to="/admission" 
          className="hidden md:flex items-center gap-2 bg-yellow-500 text-[#1a2c3d] px-4 py-2 rounded-lg font-black text-[10px] uppercase shadow-lg hover:bg-yellow-400 transition-all cursor-pointer no-underline border-none"
        >
          <Phone size={14} />
          <span>Приймальна</span>
        </Link>

        <button className="lg:hidden p-2 text-white bg-transparent border-none cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#1a2c3d] border-t border-white/10 px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {Object.entries(menuData).map(([key, menu]) => (
            <div key={key} className="space-y-2">
              <p className="text-yellow-400 text-[10px] font-black uppercase tracking-widest">{menu.title}</p>
              <div className="flex flex-col space-y-2 pl-4 border-l border-white/10">
                {menu.items.map((item, idx) => (
                  <Link 
                    key={idx} 
                    to={getLinkPath(key, item, idx)} 
                    className="text-sm py-1 text-slate-200 hover:text-yellow-400 transition no-underline"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link 
            to="/admission" 
            className="block bg-yellow-500 text-[#1a2c3d] text-center py-4 rounded-xl font-black uppercase text-sm tracking-widest mt-4 no-underline"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Приймальна комісія
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



