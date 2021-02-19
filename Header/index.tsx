import React, { useState, useCallback, useRef, useEffect } from 'react';
import { FiPower } from 'react-icons/fi';
import { MdAccountCircle } from 'react-icons/md';

import logoImg from '../../assets/images/logo.svg';
import ButtonMenu from './MenuResponsive/ButtonMenu';
import MenuResponsive from './MenuResponsive/Modal';
import Navigation from './Navigation';
import {
  Container,
  Content,
  NavLink,
  Profile,
  ProfileLink,
  Badge,
  Box,
} from './styles';

const Header: React.FC = () => {
  const menus = [{ label: 'Home', path: '/', selected: true }];

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
            <img src={logoImg} alt="Proffy" />
          </NavLink>
          <ButtonMenu handleClick={handleToggleMenu} isActive={modalOpen} />
          <Navigation menus={menus} />
        </Box>
        <Profile>
          <ProfileLink to="/profile">
            <div>
              <strong>Bem-vindo,</strong>
              <span>Mmjkjkfd</span>
            </div>
          </ProfileLink>
        </Profile>
      </Content>
    </Container>
  );
};

export default Header;
