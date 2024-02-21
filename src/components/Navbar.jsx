import React from 'react';
import { NavLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PropTypes from 'prop-types';
import './Navbar.css';

const Navbar = ({ darkMode, setDarkMode }) => {
    const [activeLink, setActiveLink] = React.useState('/');

    const handleSetActive = (link) => {
        setActiveLink(link);
    };

    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li className="nav-item">
                    <NavLink
                        to="/"
                        className={activeLink === '/' ? 'active' : ''}
                        onClick={() => handleSetActive('/')}>
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/about"
                        className={activeLink === '/about' ? 'active' : ''}
                        onClick={() => handleSetActive('/about')}>
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/CV"
                        className={activeLink === '/CV' ? 'active' : ''}
                        onClick={() => handleSetActive('/CV')}>
                        CV
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/skills"
                        className={activeLink === '/skills' ? 'active' : ''}
                        onClick={() => handleSetActive('/skills')}>
                        Skills
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/experience"
                        className={activeLink === '/experience' ? 'active' : ''}
                        onClick={() => handleSetActive('/experience')}>
                        Experience
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/portfolio"
                        className={activeLink === '/portfolio' ? 'active' : ''}
                        onClick={() => handleSetActive('/portfolio')}>
                        Portfolio
                    </NavLink>
                </li>
            </ul>
            <div>
                <IconButton edge="end" style={{color:"var(--button-color)"}} className="nav-button" onClick={() => window.open('https://github.com/Theoabw', '_blank')}>
                    <GitHubIcon />
                </IconButton>
                <IconButton edge="end" style={{color:"var(--button-color)"}} className="nav-button" onClick={() => window.open('https://linkedin.com/in/tabw', '_blank')}>
                    <LinkedInIcon />
                </IconButton>
                <IconButton edge="end" style={{color:"var(--button-color)"}} className="nav-button" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired,
};

export default Navbar;