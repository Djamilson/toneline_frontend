import React from 'react';

import { Container } from './styles';

interface IProps {
  isSticky: boolean;
}
const Background: React.FC<IProps> = ({ isSticky }) => {
  return (
    <Container isSticky={isSticky}>
      <section>
        <h1>Estamos te aguardando!</h1>
        <span>
          Sua <strong>locadora</strong> de veículos
        </span>
      </section>
    </Container>
  );
};

export default Background;
