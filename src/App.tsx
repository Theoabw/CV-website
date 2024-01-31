import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cookies from 'js-cookie';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import About from './components/About';
import CVPDF from './components/CV-PDF';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import './App.css';

const App = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const cookie = Cookies.get('darkMode');
        return cookie ? JSON.parse(cookie) : false;
    });

    useEffect(() => {
        document.body.className = darkMode ? 'dark-mode' : 'light-mode';
        Cookies.set('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    return (
        <Router>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/CV" element={<CVPDF />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </Router>
    );
};

export default App;