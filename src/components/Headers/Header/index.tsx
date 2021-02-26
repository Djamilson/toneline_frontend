import React, { useState, useRef, useEffect } from 'react';
import { FiPhoneCall } from 'react-icons/fi';

import whatsapp from '../../../assets/images/icons/whatsapp.svg';
import { Container, Content, Box, Item } from './styles';

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
          <Item>Locadora de Veículos</Item>
          <span>
            <img src={whatsapp} alt="Proffy" />
            <strong>(63) 3225-0471</strong>
          </span>
          <span>
            <FiPhoneCall />
            <strong>(63) 3225-0471</strong>
          </span>
        </Box>
      </Content>
    </Container>
  );
};

export default Header;
