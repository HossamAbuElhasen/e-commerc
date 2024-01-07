import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navitem.css';
import logo from '../assets/logo.png';
import { FaSearch } from 'react-icons/fa';


export default function Navitem() {


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const closeDropdown = () => {
      setIsMenuOpen(false);
    };
  


  return (
    <>
        <div className="navbar navbar-expand-md navbar-dark">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="" />
        </a>
        <div className="search-box">
          <input type="text" placeholder="search... " />
          <i className="fa fa-search"><FaSearch /></i>
        </div>
        
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}id="mainmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a to="/" className="nav-link" onClick={closeDropdown} >Home</a>
            </li>
            <li className="nav-item">
              <a to="/Details" className="nav-link" onClick={closeDropdown}>Details</a>
            </li>
            <li className="nav-item">
              <a to="/Profile" className="nav-link"  onClick={closeDropdown}>
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    </>


  );
}

