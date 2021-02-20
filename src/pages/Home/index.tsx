import React, { useEffect, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';
import { MdAccessible } from 'react-icons/md';
import { Marker } from 'react-leaflet';

import logoCurso from '../../assets/images/logo.svg';
import img_0_0_30 from '../../assets/img_0_0_30.jpg';
import N9Pf2J656aQ from '../../assets/N9Pf2J656aQ.jpg';
import ovrOPhu8vSw from '../../assets/ovrOPhu8vSw.jpg';
import splash from '../../assets/splash.png';
import SubHeader from '../../components/Headers/Header';
import Header from '../../components/Headers/SubHeader';
import Background from '../../components/Section/Background';
import SectionForm from '../../components/Section/SectionForm';
import SectionOne from '../../components/Section/SectionOne';
import SectionTwo from '../../components/Section/SectionTwo';
import { colors } from '../../styles';
import {
  Container,
  BoxCardImage11,
  BoxCard,
  Gallery,
  BoxCard02,
  BoxCard03,
  BoxCard101,
  BoxCardImage,
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
      <Header />
      <SubHeader />
      <Background isSticky={sticky.isSticky} />

      <SectionOne />

      <SectionTwo />

      <SectionForm />
    </Container>
  );
};

export default Home;
