import React, { useState, useCallback, useRef, useEffect } from 'react';

import logoImg from '../../../assets/logo.png';
import ButtonMenu from './MenuResponsive/ButtonMenu';
import MenuResponsive from './MenuResponsive/Modal';
import Navigation from './Navigation';
import {
  Container,
  Content,
  NavLink,
  Profile,
  ProfileLink,
  Box,
} from './styles';

const Header: React.FC = () => {
  const menus = [
    { label: 'Home', selected: true, scroll: '0' },
    { label: 'Contato', selected: false, scroll: '2680' },
    { label: 'Localização', selected: false, scroll: '5580' },
  ];

  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleToggleMenu = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen, setModalOpen]);

  useEffect(() => {
    if (!headerRef.current) return;
    const handleScrollEvent = () => {
      if (window.pageYOffset > 90) {
        setSticky({ isSticky: true, offset: window.pageYOffset });
      }
      if (window.pageYOffset < 9) {
        setSticky({ isSticky: false, offset: 0 });
      }
    };

    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [setSticky]);

  return (
    <Container ref={headerRef} visible={sticky.isSticky}>
      <MenuResponsive handleToggleMenu={handleToggleMenu} isOpen={modalOpen} />
      <Content>
        <Box>
          <NavLink to="/dashboard">
            <img src={logoImg} alt="Toneline" />
          </NavLink>
          <ButtonMenu handleClick={handleToggleMenu} isActive={modalOpen} />
          <Navigation menus={menus} />
        </Box>
        <Profile>
          <ProfileLink to="/profile">
            <div>
              <strong>Bem-vindo,</strong>
              <span>Visitante</span>
            </div>
          </ProfileLink>
        </Profile>
      </Content>
    </Container>
  );
};

export default Header;
