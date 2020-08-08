import React from 'react';
import { FooterBase } from './styles';
import logoY from '../../assets/logoY.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.github.com/bfloriano/myFlix">
        <img className='Logo' src={logoY} alt='BruFlix logo' />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
