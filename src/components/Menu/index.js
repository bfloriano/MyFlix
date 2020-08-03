import React from 'react';
import logoY from '../../assets/logoY.png';
import './menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className='Menu'>
      <a href='/'>
      <img className='Logo' src={logoY} alt='BruFlix logo'/>
      </a>
      <Button as='a' className='ButtonLink' href='/'>
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;