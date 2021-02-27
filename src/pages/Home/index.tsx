import React, { useEffect, useState } from 'react';
import { MdAccessible } from 'react-icons/md';
import { TileLayer, Marker } from 'react-leaflet';

import logoCurso from '../../assets/images/logo.svg';
import Footer from '../../components/Footer';
import SubHeader from '../../components/Headers/Header';
import Header from '../../components/Headers/SubHeader';
import Map from '../../components/Map';
import happyMapIcon from '../../components/Map/happMapIcon';
import ScrollIndicator from '../../components/ScrollIndicator';
import Background from '../../components/Section/Background';
import Gallery from '../../components/Section/Gallery';
import Person from '../../components/Section/Person';
import SectionForm from '../../components/Section/SectionForm';
import SectionOne from '../../components/Section/SectionOne';
import SectionTwo from '../../components/Section/SectionTwo';
import { Container, BoxCardImage11, ContainerMap } from './styles';

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
      <ScrollIndicator />
      <Header />
      <SubHeader />
      <Background isSticky={sticky.isSticky} />

      <SectionOne />
      <SectionTwo />

      <SectionForm />

      <Gallery />
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

      <ContainerMap>
        <header>
          <h2>Localização</h2>
          <span>Mapa</span>
        </header>

        <Map style={{ width: '100%', height: 380, overflowX: 'hidden' }}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker
            interactive={false}
            icon={happyMapIcon}
            position={[-10.183906, -48.309326]}
          />
        </Map>
      </ContainerMap>
      <Footer />
    </Container>
  );
};

export default Home;
