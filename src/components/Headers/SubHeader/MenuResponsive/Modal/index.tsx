import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';

import {
  Background,
  Container,
  OrderLI,
  NavigationLink,
  ModalWrapper,
} from './styles';

interface IProps {
  handleToggleMenu(): void;
  isOpen: boolean;
}

const Modal: React.FC<IProps> = ({ isOpen, handleToggleMenu }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? `translateY(0%)` : `translateY(-100%)`,
  });

  return (
    <Background visible={isOpen} onClick={handleToggleMenu} ref={modalRef}>
      <animated.div style={animation}>
        <ModalWrapper showModal={isOpen}>
          <Container>
            <OrderLI>
              <NavigationLink
                to="/profile"
                aria-label="Meu perfil"
                onClick={() => handleToggleMenu()}
              >
                <span>Meu Perfil</span>
              </NavigationLink>
            </OrderLI>
          </Container>
        </ModalWrapper>
      </animated.div>
    </Background>
  );
};

export default Modal;
