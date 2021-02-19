import React, { useEffect, useRef, useState } from 'react';
import { MdAccessible } from 'react-icons/md';

import landingImg from '../../assets/images/landing.svg';
import logoImg from '../../assets/images/logo.svg';
import logoCurso from '../../assets/images/logo.svg';
import img_0_0_30 from '../../assets/img_0_0_30.jpg';
import N9Pf2J656aQ from '../../assets/N9Pf2J656aQ.jpg';
import ovrOPhu8vSw from '../../assets/ovrOPhu8vSw.jpg';
import splash from '../../assets/splash.png';
import SubHeader from '../../components/Headers/Header';
import Header from '../../components/Headers/SubHeader';
import {
  Container,
  Background,
  Background02,
  BoxCard,
  Gallery,
  BoxCard02,
  BoxCard03,
  BoxCardImage,
  Box,
  ContainerLogo,
  Footer,
  LinkStudy,
  LinkGiveClasses,
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
  }, [setSticky]);
  return (
    <Container>
      <Header />
      <SubHeader />
      <Background isSticky={sticky.isSticky}>
        <div>
          <section>
            <img src={logoCurso} alt="Proffy" />
            <span>Sua plataforma de estudos online</span>
          </section>
        </div>
      </Background>

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

      <Gallery>
        <div>
          <img src={img_0_0_30} alt="Proffy" />
          <article>
            <h1> 2017 CHEVROLET SPARK</h1>

            <span>PRICE: $10,000 </span>
            <p>
              Mileage: 39,208 Trim: 1.6 L Transmission:1-Speed Automatic Engine:
              Gas I4 1.4L Doors - 4 Exterior Color - Blue
            </p>
          </article>
        </div>
        <div>
          <img src={N9Pf2J656aQ} alt="Proffy" />
          <article>
            <span> 2017 CHEVROLET SPARK PRICE: $10,000 </span>
            <p>
              Mileage: 39,208 Trim: 1.6 L Transmission:1-Speed Automatic Engine:
              Gas I4 1.4L Doors - 4 Exterior Color - Blue
            </p>
          </article>
        </div>
        <div>
          <img src={ovrOPhu8vSw} alt="Proffy" />
          <article>
            <span> 2017 CHEVROLET SPARK PRICE: $10,000 </span>
            <p>
              Mileage: 39,208 Trim: 1.6 L Transmission:1-Speed Automatic Engine:
              Gas I4 1.4L Doors - 4 Exterior Color - Blue
            </p>
          </article>
        </div>
        <div>
          <img src={splash} alt="Proffy" />
          <article>
            <span> 2017 CHEVROLET SPARK PRICE: $10,000 </span>
            <p>
              Mileage: 39,208 Trim: 1.6 L Transmission:1-Speed Automatic Engine:
              Gas I4 1.4L Doors - 4 Exterior Color - Blue
            </p>
          </article>
        </div>
      </Gallery>

      <Background02>
        <div>
          <section>
            <span>Sua plataforma de estudos online</span>
          </section>
        </div>
      </Background02>

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

      <BoxCardImage>
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
      </BoxCardImage>

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
    </Container>
  );
};

export default Home;
