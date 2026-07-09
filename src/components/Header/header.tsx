import { useState } from 'react';
import styled from 'styled-components';

interface NavProps {
  $isOpen: boolean;
}

const HeaderContainer = styled.header`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
  background-color: #000000;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  z-index: 12;
  flex-basis: 120px
`;

const Logo = styled.img`
  width: 120px;
  max-height: 70px;
  object-fit: contain;
`;

const NavMenu = styled.nav<NavProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  ul.menu {
    display: flex;
    gap: 30px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.05rem;
    transition: color 0.2s;
    white-space: nowrap;

    &:hover {
      color: #f0a500;
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: auto;
    width: 100%;
    height: 100vh;
    background-color: #000000;
    justify-content: center;
    flex-direction: column;
    z-index: 10;
    flex-grow: 0;
    
    transition: ${(props) => (props.$isOpen ? 'transform 0.3s ease-in-out, visibility 0.3s' : 'none')};
    transform: ${(props) => (props.$isOpen ? 'translateX(0)' : 'translateX(100%)')};
    visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')};
   
    ul.menu {
      flex-direction: column;
      align-items: center;
      gap: 30px;
  }
}
`;

const ButtonAgendar = styled.button`
  width: 160px;
  height: 41px;
  background-color: #f0a500;
  color: #000;
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9rem;
  transition: background-color 0.2s;
  z-index: 12;
  white-space: nowrap;

  &:hover {
    background-color: #d89400;
  }

  @media (max-width: 768px) {
  display: none;
  }
`;

const HamburgerButton = styled.button<NavProps>`
  display: none;
  background: transparent;
  cursor: pointer;
  z-index: 12;
  border: 2px solid transparent;
  align-items:center;
  justify-content: center;
  padding: 10px 24px;
  height: 41px;
  min-width: 150px;
  
  .hamburger-box {
    width: 30px;
    height: 21px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: auto;
  }

  div.bar {
    width: 30px;
    height: 3px;
    background-color: #f0a500;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 5px;
    margin: 4px;

    &:first-child {
      transform: ${(props) => (props.$isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${(props) => (props.$isOpen ? '0' : '1')};
      transform: ${(props) => (props.$isOpen ? 'translateX(20px)' : 'translateX(0)')};
    }

    &:last-child {
      transform: ${(props) => (props.$isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src="/images/logo.png" alt="Logo Barber" />
      </LogoContainer>

      <NavMenu $isOpen={menuOpen}>
        <ul className="menu">
          <li><a href="#about" onClick={() => setMenuOpen(false)}>Sobre</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Serviços</a></li>
          <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Quem Somos</a></li>
          <li><a href="#footer" onClick={() => setMenuOpen(false)}>Contatos</a></li>
        </ul>
      </NavMenu>

      <ButtonAgendar onClick={() => console.log('Agendamento clicado!')}>
        Agendar Horário
      </ButtonAgendar>

      <HamburgerButton $isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <div className="hamburguer-box">
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
      </HamburgerButton>
    </HeaderContainer>
  );
};