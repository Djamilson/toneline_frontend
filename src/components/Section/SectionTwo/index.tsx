import React, { useEffect } from 'react';
import { MdAccessible } from 'react-icons/md';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Container } from './styles';
import 'aos/dist/aos.css';

const SectionTwo: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Container>
      <div data-aos="fade-right">
        <section />
      </div>

      <article>
        <MdAccessible />
        <h2>Seu carro para reserva!! </h2>
        <span>Testestg</span>
        <p>
          Powering the SUV is a 1.6-litre VTEC petra Standard equipment across
          all grades is parking sensors and a rear-view camera and Honda’s
          SENSIN system. This suite of driver assistance and safety systems
          including collision mitigation braking system.
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
