import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FiAlertCircle } from 'react-icons/fi';
import { MdAccessible } from 'react-icons/md';

import logoCurso from '../../assets/images/logo.svg';
import SubHeader from '../../components/Headers/Header';
import Header from '../../components/Headers/SubHeader';
import Background from '../../components/Section/Background';
import Gallery from '../../components/Section/Gallery';
import SectionForm from '../../components/Section/SectionForm';
import SectionOne from '../../components/Section/SectionOne';
import SectionTwo from '../../components/Section/SectionTwo';
import { colors } from '../../styles';
import {
  Container,
  BoxCardImage11,
  BoxCard,
  BoxCard02,
  BoxCard03,
  BoxCard101,
  Tooltip,
} from './styles';

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
      <Helmet>
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
              Powering the SUV is a 1.6-litre VTEC petra Standard equipment
              across all grades is parking sensors and a rear-view camera and
              Honda’s SENSIN system. This suite of driver assistance and safety
              systems including collision mitigation braking system, forward
              collision warning, lane keep assist, lane departure warning, road
              departure mitigation, adaptive cruise control and traffic sign rec
            </p>
            <p>
              Powering the SUV is a 1.6-litre VTEC petra Standard equipment
              across all grades is parking sensors and a rear-view camera and
              Honda’s SENSIN system.
            </p>
          </article>
        </BoxCardImage11>
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
        <BoxCard101>
          <div>
            <MdAccessible />
            <span>Testestg</span>
            <p>JKHKJHjhkjh kjhkj hkj hkjhkjhkjhk kjhkjhk hkjhKJHkj hkjh</p>
          </div>
        </BoxCard101>
        <Gallery>
          <Tooltip title="TESTESET">
            <FiAlertCircle color={colors.colorBackground01} size={20} />
          </Tooltip>
        </Gallery>
        <BoxCard03>
          <section>
            <span>Teste</span>
          </section>
          <article>
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
          </article>
          <footer>
            <span>Teste</span>
          </footer>
        </BoxCard03>
      </Helmet>
    </Container>
  );
};

export default Home;
