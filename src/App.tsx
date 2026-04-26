import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Admission from './pages/Admission';
import Contacts from './pages/Contacts';
import Faculty from './pages/Faculty';
import ContentPage from './pages/ContentPage';
import About from './pages/About';
import DocumentPage from './pages/educationPlan';


function App() {
  return (
    <Router>
      {/* Главный контейнер теперь без фона, чтобы Navbar и Footer имели свои цвета */}
      <div className="min-h-screen flex flex-col font-sans">     
        <Navbar />       
        
        {/* Фон .maritime-bg теперь только здесь — между шапкой и подвалом */}
        <main className="maritime-bg flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/contacts" element={<Contacts />} />        
            <Route path="/:category/:id" element={<ContentPage />} />
            <Route path="/about/:id" element={<About />} />
            <Route path="/about/0" element={<DocumentPage />} />

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;






