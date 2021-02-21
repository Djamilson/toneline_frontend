import React from 'react';

import logoCurso from '../../../assets/images/logo.svg';
import { Container } from './styles';

interface IProps {
  isSticky: boolean;
}
const Background: React.FC<IProps> = ({ isSticky }) => {
  return (
    <Container isSticky={isSticky}>
      <div>
        <section>
          <h1>Estamos te aguardando!</h1>
          <span>
            Sua <strong>locadora</strong> de veículos
          </span>
        </section>
      </div>
    </Container>
  );
};

export default Background;
