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
  height: 250vh;
  top: 0;
  right: 0;
  margin-top: 60vh;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    height: 120vh;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: row;
    height: 140vh;
  }

  div {
    background: url(${backgroundUnsplash}) no-repeat center;
    background-size: cover;

    flex: 1;
    align-content: flex-start;
    justify-content: space-around;
    flex-direction: column;

    animation: appearImageLeft 10s linear infinite;
    transform: translateY(4em) rotateZ(-5deg);
    transition: transform 4s 0.25s cubic-bezier(0, 1, 0.3, 1),
      opacity 0.3s 0.25s ease-out;
    will-change: transform, opacity;

    width: 100%;
    height: auto;

    section {
      width: 50vw;
      height: auto;
    }

    @media (min-width: 768px) {
      margin-top: 5rem;
      height: 600px;
      width: 50vw;
    }
  }

  article {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 100%;
    margin: 4rem;

    @media (min-width: 768px) {
      width: 40%;
    }
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
      text-align: justify;
      line-height: 1.5;
      @media (max-width: 768px) {
        width: 80%;
      }
    }
  }
`;
