import React, { useEffect, useState } from 'react';
import { MdAccessible } from 'react-icons/md';

import logoCurso from '../../assets/images/logo.svg';
import Footer from '../../components/Footer';
import SubHeader from '../../components/Headers/Header';
import Header from '../../components/Headers/SubHeader';
import Background from '../../components/Section/Background';
import Gallery from '../../components/Section/Gallery';
import Person from '../../components/Section/Person';
import SectionForm from '../../components/Section/SectionForm';
import SectionOne from '../../components/Section/SectionOne';
import SectionTwo from '../../components/Section/SectionTwo';
import { Container, BoxCardImage11, BoxCard, BoxCard02 } from './styles';

const Home: React.FC = () => {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });

  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.pageYOffset > 890) {
        setSticky({ isSticky: true, offset: window.pageYOffset });
      }
      if (window.pageYOffset < 1800) {
        setSticky({ isSticky: false, offset: 0 });
      }
    };

    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [setSticky, sticky.offset]);
  return (
    <Container>
      <Header />
      <SubHeader />
      <Background isSticky={sticky.isSticky} />
      <SectionOne />
      <SectionTwo />
      <SectionForm />
      <BoxCard02>
        <div>
          <MdAccessible />
          <span>Testestg</span>
          <p>JKHKJHjhkjh kjhkj hkj hkjhkjhkjhk kjhkjhk hkjhKJHkj hkjh</p>
        </div>
        <div>
          <MdAccessible />
          <span>Testestg</span>
          <p>JKHKJHjhkjh kjhkj hkj hkjhkjhkjhk kjhkjhk hkjhKJHkj hkjh</p>
        </div>
        <div>
          <MdAccessible />
          <span>Testestg</span>
          <p>JKHKJHjhkjh kjhkj hkj hkjhkjhkjhk kjhkjhk hkjhKJHkj hkjh</p>
        </div>
        <div>
          <MdAccessible />
          <span>Testestg</span>
          <p>JKHKJHjhkjh kjhkj hkj hkjhkjhkjhk kjhkjhk hkjhKJHkj hkjh</p>
        </div>
      </BoxCard02>
      <Gallery />
      <BoxCard>
        <div>
          <MdAccessible />
          <span>Testestg</span>
          <p>JKHKJHjhkjh kjhkj hkj hkjhkjhkjhk kjhkjhk hkjhKJHkj hkjh</p>
        </div>
        <div>
          <MdAccessible />
          <span>Testestg</span>
          <p>JKHKJHjhkjh kjhkj hkj hkjhkjhkjhk kjhkjhk hkjhKJHkj hkjh</p>
        </div>
        <div>
          <MdAccessible />
          <span>Testestg</span>
          <p>JKHKJHjhkjh kjhkj hkj hkjhkjhkjhk kjhkjhk hkjhKJHkj hkjh</p>
        </div>
        <div>
          <MdAccessible />
          <span>Testestg</span>
          <p>JKHKJHjhkjh kjhkj hkj hkjhkjhkjhk kjhkjhk hkjhKJHkj hkjh</p>
        </div>
      </BoxCard>
      <BoxCardImage11 offset={sticky.offset}>
        <section>
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
      </BoxCardImage11>
      <Person />
      <Footer />
    </Container>
  );
};

export default Home;
