// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Admission from './pages/Admission';
// import Contacts from './pages/Contacts';
// import Faculty from './pages/Faculty';
// import ContentPage from './pages/ContentPage';
// import About from './pages/About';
// import DocumentPage from './pages/educationPlan';
// import InternationalProjects from './pages/InternationalProjects';
// import InternationalMobile from './pages/InternationalMobile';
// import InternationalReports from './pages/InternationalReports';
// import InternationalInternship from './pages/InternationalInternship';
// import EdPlans from './pages/edPlans';

// function App() {
//   return (
//     <Router>
//       {/* Главный контейнер теперь без фона, чтобы Navbar и Footer имели свои цвета */}
//       <div className="min-h-screen flex flex-col font-sans">     
//         <Navbar />       
        
//         {/* Фон .maritime-bg теперь только здесь — между шапкой и подвалом */}
//         <main className="maritime-bg flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/admission" element={<Admission />} />
//             <Route path="/faculty" element={<Faculty />} />
//             <Route path="/contacts" element={<Contacts />} />        
//             <Route path="/:category/:id" element={<ContentPage />} />
//             <Route path="/about/:id" element={<About />} />
//             <Route path="/about/0" element={<DocumentPage />} />
//             <Route path="/international/0" element={<InternationalProjects />} />
//             <Route path="/international/mobile" element={<InternationalMobile />} />
//             <Route path="/international/3" element={<InternationalReports />} />
//             <Route path="/international/2" element={<InternationalInternship />} />
//             <Route path="/education/0" element={<EdPlans />} />
//          </Routes>
//               </main>

//         <Footer/>
//       </div>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Admission from './pages/Admission';
import Contacts from './pages/Contacts';
import Faculty from './pages/Faculty';
import ContentPage from './pages/ContentPage';
import About from './pages/About';
import InternationalProjects from './pages/InternationalProjects';
import InternationalMobile from './pages/InternationalMobile';
import InternationalReports from './pages/InternationalReports';
import InternationalInternship from './pages/InternationalInternship';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">     
        <Navbar />       
        
        <main className="maritime-bg flex-grow">
          <Routes>
            {/* Основные страницы */}
            <Route path="/" element={<Home />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/contacts" element={<Contacts />} />

            {/* Офіційні документи И Освітні програми (теперь оба здесь) */}
            <Route path="/about/0" element={<Admission />} />
            <Route path="/education/0" element={<Admission />} />
            <Route path="/admission" element={<Admission />} />

            {/* Динамические маршруты для остальных страниц */}
            <Route path="/about/:id" element={<About />} />
            <Route path="/:category/:id" element={<ContentPage />} />

            {/* Международная деятельность */}
            <Route path="/international/0" element={<InternationalProjects />} />
            <Route path="/international/mobile" element={<InternationalMobile />} />
            <Route path="/international/3" element={<InternationalReports />} />
            <Route path="/international/2" element={<InternationalInternship />} />
          </Routes>
        </main>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;






