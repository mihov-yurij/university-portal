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
import EdPlans from './pages/edPlans';
import MTZ from './pages/mtz';
import ScienceReport from './pages/ScienceReport';
import ScienceSchool from './pages/ScienceSchool';
import ScienceArticle from './pages/ScienceArticle';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">     
        <Navbar />     
        
        <main className="maritime-bg flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about/0" element={<Admission />} />
            <Route path="/about/4" element={<MTZ/>} />
            <Route path="/education/0" element={<EdPlans />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/about/:id" element={<About />} />
            <Route path="/:category/:id" element={<ContentPage />} />
            <Route path="/international/0" element={<InternationalProjects />} />
            <Route path="/international/mobile" element={<InternationalMobile />} />
            <Route path="/international/3" element={<InternationalReports />} />
            <Route path="/international/2" element={<InternationalInternship />} />
            <Route path="/science/4" element={<ScienceReport />} />
            <Route path="/science/1" element={<ScienceSchool />} />
            <Route path="/science/2" element={<ScienceArticle />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;






