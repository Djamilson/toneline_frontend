import React, { useState, useRef, useEffect } from 'react';

import logoImg from '../../../assets/images/logo.svg';
import {
  Container,
  Content,
  NavLink,
  Profile,
  ProfileLink,
  Box,
} from './styles';

const Header: React.FC = () => {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef<HTMLDivElement>(null);

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
      <Content>
        <Box>
          <span>Fonennn</span>
          <strong>Fone,</strong>
          <span>Mmjkjkfd</span>
          <span>Mmjkjkfd</span>
        </Box>
      </Content>
    </Container>
  );
};

export default Header;
