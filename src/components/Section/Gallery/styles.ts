import styled, { keyframes } from 'styled-components';

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

export const Container = styled.div`
  z-index: 1;
  background: ${colors.colorBackground02};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 90vh;
  top: 0;
  right: 0;
  margin-top: 110vh;
  padding: 5rem 10rem;

  div {
    background: ${colors.colorBackground02};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin: 0 0.5rem;
    border: 0;
    width: 25vw;
    height: 60vh;
    -webkit-box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.4);
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }

    img {
      width: 100%;
      height: 20vh;
      animation: ${appearImageLeft} 1s;
    }
    article {
      border: 1px solid ${colors.colorTextInWhite};
      align-content: flex-start;
      justify-content: space-around;
      width: 100%;
      height: 40vh;
      flex-direction: column;
      padding: 1rem;

      h1 {
        font-size: 18px;
        font-weight: bold;
        color: ${colors.colorTextcomplement01};
        margin-bottom: 1rem;
      }
      span {
        font-size: 16px;
        font-weight: bold;
        color: ${colors.colorTextTitle};
      }
      p {
        margin-top: 1rem;
        font-size: 14px;
        font-weight: normal;
        color: ${colors.colorTextBase};
      }
    }
  }
`;
