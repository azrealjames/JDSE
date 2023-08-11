import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
// import AboutPage from './pages/AboutPage';
import './App.css';
import WorksPage from './pages/WorksPage';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        {/* <Route path='about' element={<AboutPage />} /> */}
        <Route path='work' element={<WorksPage />} />
      </Routes>
    </div>
  );
}

export default App;
