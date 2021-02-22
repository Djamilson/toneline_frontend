import React from 'react';

import img_0_0_30 from '../../../assets/img_0_0_30.jpg';
import N9Pf2J656aQ from '../../../assets/N9Pf2J656aQ.jpg';
import ovrOPhu8vSw from '../../../assets/ovrOPhu8vSw.jpg';
import splash from '../../../assets/splash.png';
import { Container } from './styles';

const SectionTwo: React.FC = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default SectionTwo;
