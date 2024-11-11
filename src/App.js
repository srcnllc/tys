import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar/Sidebar';
import Header from './components/Layout/Header/Header';
import Breadcrumb from './components/Layout/Breadcrumb/Breadcrumb';
import Navigation from './components/Layout/Navigation/Navigation';
import { useState } from 'react';
import Proje from './pages/Proje/Proje';
import ProjeDetayModeller from './pages/ProjeDetayModeller/ProjeDetayModeller';
import ProjeTakvimi from './pages/ProjeTakvimi/ProjeTakvimi';
import ProjeKesif from './pages/ProjeKesif/ProjeKesif';
import AltYükleniciler from './pages/AltYükleniciler/AltYükleniciler';

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [activeLink, setActiveLink] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="App ">
      {isSidebarVisible && <Sidebar />}
      <div className="content">
        <Header onHamburgerClick={toggleSidebar} />
        <Breadcrumb />
        <Navigation activeLink={activeLink} setActiveLink={setActiveLink} />
        <Routes>
          {activeLink === 0 && <Route path="/proje" element={<Proje />} />}
          {activeLink === 1 && <Route path="/proje" element={<ProjeDetayModeller />} />}
          {activeLink === 2 && <Route path="/proje" element={<ProjeTakvimi />} />}
          {activeLink === 3 && <Route path="/proje" element={<ProjeKesif />} />}
          {activeLink === 4 && <Route path="/proje" element={<AltYükleniciler />} />}
          <Route path="/" element={<Navigate to="/proje" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
