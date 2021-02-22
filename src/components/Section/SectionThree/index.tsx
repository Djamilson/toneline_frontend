import React, { useEffect } from 'react';
import { MdAccessible } from 'react-icons/md';

import AOS from 'aos';
import 'aos/dist/aos.css';

import logoCurso from '../../../assets/images/logo.svg';
import { Container } from './styles';

const SectionTwo: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Container>
      <section data-aos="fade-right">
        <img src={logoCurso} alt="Proffy" />
        <span>Locadora de Veículo neline</span>
      </section>

      <article>
        <MdAccessible />
        <h2>Seu carro para reserva!! </h2>
        <span>Testestg</span>
        <p>
          Powering the SUV is a 1.6-litre VTEC petra Standard equipment across
          all grades is parking sensors and a rear-view camera and Honda’s
          SENSIN system. This suite of driver assistance and safety systems
          including collision mitigation braking system, forward collision
          warning, lane keep assist, lane departure warning, road departure
          mitigation, adaptive cruise control and traffic sign rec
        </p>
        <p>
          Powering the SUV is a 1.6-litre VTEC petra Standard equipment across
          all grades is parking sensors and a rear-view camera and Honda’s
          SENSIN system.
        </p>
      </article>
    </Container>
  );
};

export default SectionTwo;
