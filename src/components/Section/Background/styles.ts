import styled, { keyframes } from 'styled-components';

import signInBackgroundImg from '../../../assets/banner.jpg';
import backgroundImg02 from '../../../assets/p7tai9P7H.jpg';
import { colors } from '../../../styles';

const appearImageLeft = keyframes`
  from{
    opacity:0;
    transform: translateX(50px);
     -webkit-animation-timing-function: ease-out;
  }
  to{
    opacity:1;
    transform: translateX(0px)
    -webkit-animation-timing-function: ease-in;
  }
`;

interface IProps {
  isSticky: boolean;
}
export const Container = styled.div<IProps>`
  position: fixed;
  top: ${(props) => (props.isSticky ? `12vh` : `17.3vh`)};
  right: 0;
  display: block;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${colors.colorPrimary};
  height: 82vh;
  border: 0;
  min-width: 380px;
  animation: ${appearImageLeft};
  transition-duration: 2.2s;

  background: ${(props) =>
    props.isSticky
      ? `url(${signInBackgroundImg}) no-repeat center`
      : `url(${backgroundImg02}) no-repeat center`};
  background-size: 100% auto;

  @media (min-width: 1024px) {
    width: 100%;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      font-size: 42px;
      font-weight: bold;
      margin-top: 6.8rem;
      @media (min-width: 1024px) {
        margin-top: 6rem;
        margin-left: 30rem;
      }
    }

    > span {
      font-weight: 500;
      font-size: 3.3rem;
      line-height: 4.6rem;
      margin-top: 0.8rem;

      @media (min-width: 1024px) {
        margin-left: 40.5rem;
      }

      strong {
        font-weight: bold;
        font-size: 4rem;
        color: ${colors.colorBackground01};
      }

      @media (min-width: 1100px) {
        text-align: initial;
        font-size: 1.6rem;
      }
    }
  }
`;
