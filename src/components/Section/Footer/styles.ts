import styled from 'styled-components';

import backgroundUnsplash from '../../../assets/unsplash.jpg';
import { colors } from '../../../styles';

export const Container = styled.div`
  z-index: 1;
  background: ${colors.colorBackground04};

  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 90vh;
  top: 0;
  right: 0;
  margin-top: 60vh;

  section {
    background: url(${backgroundUnsplash}) no-repeat center;
    background-size: 100% auto;
    height: 90vh;
    flex-grow: 1;
    align-content: flex-start;
    justify-content: space-around;
    flex-direction: column;

    animation: appearImageLeft 12s linear infinite;
    transform: translateY(4em) rotateZ(-5deg);
    transition: transform 4s 0.25s cubic-bezier(0, 1, 0.3, 1),
      opacity 0.3s 0.25s ease-out;
    will-change: transform, opacity;
  }

  article {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 40%;
    margin: 4rem;
    h2 {
      font-size: 30px;
      font-weight: bold;
      color: ${colors.colorTitleInPrimary};
      margin-bottom: 5rem;
    }

    span {
      font-size: 23px;
      font-weight: bold;
      color: ${colors.colorTextTitle};
    }
    p {
      margin-top: 1rem;
      font-size: 18px;
      font-weight: normal;
      color: ${colors.colorTitleInPrimary};
    }
  }
`;
