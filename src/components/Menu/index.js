import React from 'react';
import logoY from '../../assets/logoY.png';
import './menu.css';
import Button from '../Button';
import { Link } from 'react-router-dom';
// import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className='Menu'>
      <Link to='/'>
      <img className='Logo' src={logoY} alt='BruFlix logo'/>
      </Link>
      <Button as={Link} className='ButtonLink' to='/cadastro/video'>
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;