import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importa o CSS da Navbar
import { MdOutlineSearch } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">LocalTec</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/main">Produtos</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
      </ul>
      <div className='search-box'>
        <input type='text' placeholder='Pesquisar'></input>
        <button type='submit'> <MdOutlineSearch /></button>
      </div>
    </nav>
  );
};

export default Navbar;
