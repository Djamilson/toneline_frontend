import React, { useEffect } from 'react';

import AOS from 'aos';

import img_0_0_30 from '../../../assets/img_0_0_30.jpg';
import N9Pf2J656aQ from '../../../assets/N9Pf2J656aQ.jpg';
import ovrOPhu8vSw from '../../../assets/ovrOPhu8vSw.jpg';
import { Container } from './styles';
import 'aos/dist/aos.css';

const Person: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Container>
      <div>
        <img src={img_0_0_30} alt="Proffy" />
        <article>
          <p>
            Mileage: 39,208 Trim: 1.6 L Transmission:1-Speed Automatic Engine:
            Gas I4 1.4L Doors - 4 Exterior Color - Blue
          </p>

          <h1> 2017 CHEVROLET SPARK</h1>
        </article>
      </div>
      <div>
        <img src={N9Pf2J656aQ} alt="Proffy" />
        <article>
          <p>
            Mileage: 39,208 Trim: 1.6 L Transmission:1-Speed Automatic Engine:
            Gas I4 1.4L Doors - 4 Exterior Color - Blue
          </p>
          <h1> 2017 CHEVROLET SPARK PRICE: $10,000 </h1>
        </article>
      </div>
      <div>
        <img src={ovrOPhu8vSw} alt="Proffy" />
        <article>
          <p>
            Mileage: 39,208 Trim: 1.6 L Transmission:1-Speed Automatic Engine:
            Gas I4 1.4L Doors - 4 Exterior Color - Blue
          </p>
          <h1> 2017 CHEVROLET SPARK PRICE: $10,000 </h1>
        </article>
      </div>
    </Container>
  );
};

export default Person;
