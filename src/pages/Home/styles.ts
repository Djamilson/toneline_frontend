import styled, { keyframes } from 'styled-components';

import backgroundUnsplash from '../../assets/unsplash.jpg';
import Tooltips from '../../components/Tooltip';
import { colors } from '../../styles';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  flex-wrap: wrap;
  height: 900px;
  align-content: space-between;

  width: 100%;
  height: auto;
  // border: 1px solid #f00;
`;

const appearImageRigth = keyframes`

  from{
    opacity:0;
    transform: translateX(50px);
     -webkit-animation-timing-function: ease-out;

      transform: translateX(-100%);
  transition: right 1s, transform 1s;
  }
  to{
    opacity:1;
    transform: translateX(0px)
    -webkit-animation-timing-function: ease-in;
    right: 0%;
  transform: translateX(0%);
  }
`;

interface IPropsOffset {
  offset: number;
}
export const BoxCardImage11 = styled.div<IPropsOffset>`
  z-index: 1;
  background: ${colors.colorBackground04};

  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 90vh;
  top: 0;
  right: 0;
  margin-top: 0vh;

  section {
    //animation: ${appearImageRigth} 1s;
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

export const Tooltip = styled(Tooltips)`
  z-index: 999;
  height: 20px;
  margin-left: 0px;

  svg {
    margin: 0px;
  }

  span {
    background: ${colors.fourth};
    color: ${colors.sixth};

    &::before {
      z-index: 100;
      border-color: ${colors.fourth} transparent;
    }
  }
`;

export const ContainerMap = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  background: ${colors.colorButtonText};
  z-index: 1;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
`;
