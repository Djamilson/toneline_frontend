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
          <img src={logoCurso} alt="Proffy" />
          <span>Sua locadora de veículos</span>
        </section>
      </div>
    </Container>
  );
};

export default Background;
