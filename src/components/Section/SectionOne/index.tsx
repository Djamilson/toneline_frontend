import React from 'react';
import { FaDonate, FaRegCreditCard } from 'react-icons/fa';
import { MdAccessible, MdDirectionsCar, MdStarHalf } from 'react-icons/md';

import { Container } from './styles';

const SectionOne: React.FC = () => {
  return (
    <Container>
      <div>
        <MdAccessible />
        <span>14 DAYS RETURN</span>
        <p>
          We provide a 14-day test drive, to see if your car truly fits into
          your life. If it doesn’t, simply return it.
        </p>
      </div>
      <div>
        <FaRegCreditCard />
        <span> HIGH-QUALITY CARS </span>
        <p>
          We provide a multiple inspection and guarantee a high-quality cars and
          complimentary limited warranty.
        </p>
      </div>
      <div>
        <MdStarHalf />
        <span>SAVINGS</span>
        <p>
          You could save more when you buy your car online at TRADER, because we
          don’t have bogus fees and big overthead.
        </p>
      </div>
      <div>
        <FaDonate />
        <span>EASY ONLINE FINANCING</span>
        <p>
          Our financing partners will compete to get you a highly competitive
          rate and quickly assist you with your online order
        </p>
      </div>
      <div>
        <MdDirectionsCar />
        <span>DELIVERED RIGHT TO YOU</span>
        <p>
          Get your car or truck shipped to your home or a convenient nearby
          location. Get your car how you want it and when you want it.
        </p>
      </div>
    </Container>
  );
};

export default SectionOne;
