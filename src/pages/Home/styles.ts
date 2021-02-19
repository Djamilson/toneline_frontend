import { Link } from 'react-router-dom';

import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';

import signInBackgroundImg from '../../assets/banner.jpg';
import backgroundImg02 from '../../assets/p7tai9P7H.jpg';
import backgroundUnsplash from '../../assets/unsplash.jpg';
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
  border: 0;
`;

const appearImageLeft = keyframes`
  from{
    opacity:0;
    transform: translateX(50px);
  }
  to{
    opacity:1;
    transform: translateX(0px)
  }
`;
interface IProps {
  isSticky: boolean;
}
export const Background = styled.div<IProps>`
  position: fixed;
  top: 20vh;
  right: 0;
  display: block;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${colors.colorPrimary};
  height: 82vh;
  //margin-top: 39rem;
  border: 0;
  min-width: 380px;
  animation: ${appearImageLeft} 1s;

  background: ${(props) =>
    props.isSticky
      ? `url(${signInBackgroundImg}) no-repeat center`
      : `url(${backgroundImg02}) no-repeat center`};
  background-size: 100% auto;

  @media (min-width: 1024px) {
    width: 100%;
  }

  div {
    border: 0;
    display: flex;
    width: 100%;
    min-width: 100vw;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    //filter: blur(1.5px) brightness(0.9);

    @media (min-width: 1024px) {
      min-width: 45vw;
    }

    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 10rem;
        height: auto;
      }
      > span {
        font-weight: 500;
        font-size: 1.3rem;
        line-height: 4.6rem;
        margin-top: 0.8rem;

        @media (min-width: 1100px) {
          text-align: initial;
          font-size: 1.6rem;
        }
      }
    }
  }
`;

export const Background02 = styled.div`
  z-index: 9;
  position: fixed;
  top: 210vh;
  right: 0;
  display: block;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${colors.colorPrimary};
  height: 82vh;
  //margin-top: 39rem;
  border: 0;
  min-width: 380px;
  animation: ${appearImageLeft} 1s;

  background: url(${backgroundImg02}) no-repeat center;
  background-size: 100% auto;

  @media (min-width: 1024px) {
    width: 100%;
  }

  div {
    border: 0;
    display: flex;
    width: 100%;
    min-width: 100vw;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    //filter: blur(1.5px) brightness(0.9);

    @media (min-width: 1024px) {
      min-width: 45vw;
    }

    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 10rem;
        height: auto;
      }
      > span {
        font-weight: 500;
        font-size: 1.3rem;
        line-height: 4.6rem;
        margin-top: 0.8rem;

        @media (min-width: 1100px) {
          text-align: initial;
          font-size: 1.6rem;
        }
      }
    }
  }
`;
export const Box = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 140vh;
  margin-top: 40rem;
  margin-bottom: 0rem;
  padding: 0 3rem;

  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 3rem;
    margin-top: 0rem;
    height: 70vh;
  }

  color: ${colors.colorTextInPrimary};
  background: ${colors.colorPrimary};

  img {
    width: 100%;
    background-size: cover;
    @media (min-width: 1024px) {
      width: 33rem;
      margin-top: 4rem;
      margin-bottom: 2rem;
      border: 0;
      margin-left: -2.5rem;
    }
  }
`;

export const BoxCard = styled.div`
  z-index: 5;
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
    border: 1px solid ${colors.colorTextInWhite};
    flex-grow: 1;
    align-content: flex-start;
    justify-content: space-around;
    width: 100%;
    height: 30vh;
    border-radius: 7px;
    flex-direction: column;
    margin: 1rem;
    -webkit-box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.4);
    span {
      font-size: 18px;
      font-weight: bold;
      color: ${colors.colorTextBase};
    }
    p {
      margin-top: 1rem;
      font-size: 14px;
      font-weight: normal;
      color: ${colors.colorTextBase};
    }
  }
`;

export const BoxCard101 = styled.div`
  z-index: 5;
  background: none;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 70%;
  height: 140vh;
  top: 0;
  right: 0;
  margin-top: 10vh;
  padding: 5rem 10rem;
  div {
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid ${colors.colorTextInWhite};
    flex-grow: 1;
    align-content: flex-start;
    justify-content: space-around;
    width: 50%;
    height: 70vh;
    border-radius: 7px;
    flex-direction: column;
    margin: 1rem;
    -webkit-box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.4);
    span {
      font-size: 18px;
      font-weight: bold;
      color: ${colors.colorTextBase};
    }
    p {
      margin-top: 1rem;
      font-size: 14px;
      font-weight: normal;
      color: ${colors.colorTextBase};
    }
  }
`;

export const Gallery = styled.div`
  z-index: 5;
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

export const BoxCardImage = styled.div`
  z-index: 5;
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
    animation: ${appearImageLeft} 1s;
    background: url(${backgroundUnsplash}) no-repeat center;
    background-size: 100% auto;
    height: 90vh;
    flex-grow: 1;
    align-content: flex-start;
    justify-content: space-around;
    flex-direction: column;
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

export const BoxCard02 = styled.div`
  z-index: 5;
  background: ${colors.colorBackground04};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 90vh;
  top: 0;
  right: 0;
  margin-top: 60vh;

  padding: 5rem 10rem;
  div {
    border: 1px solid ${colors.colorTextInWhite};
    flex-grow: 1;
    align-content: flex-start;
    justify-content: space-around;
    width: 100%;
    height: 30vh;
    border-radius: 7px;
    flex-direction: column;
    margin: 1rem;
    -webkit-box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.4);
    span {
      font-size: 18px;
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
`;

export const BoxCard03 = styled.div`
  z-index: 5;
  background: ${colors.colorBackground04};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 110vh;
  top: 0;
  margin-top: 30vh;

  section {
    width: 100%;
    height: 30vh;
    span {
      font-size: 18px;
    }
  }

  article {
    border-top: 1px solid ${colors.colorTextcomplement};
    border-bottom: 1px solid ${colors.colorTextcomplement};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 90vh;
    top: 0;
    right: 0;

    padding: 5rem 10rem;

    div {
      border: 1px solid ${colors.colorTextInWhite};
      flex-grow: 1;
      align-content: flex-start;
      justify-content: space-around;
      width: 100%;
      height: 30vh;
      border-radius: 7px;
      flex-direction: column;
      margin: 1rem;
      -webkit-box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.4);
      -moz-box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.4);
      box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.4);
      span {
        font-size: 18px;
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

  footer {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 30vh;
    top: 0;
    right: 0;

    padding: 5rem 10rem;

    div {
      border: 1px solid ${colors.colorTextInWhite};
      flex-grow: 1;
      align-content: flex-start;
      justify-content: space-around;
      width: 100%;
      height: 30vh;
      border-radius: 7px;
      flex-direction: column;
      margin: 1rem;
      -webkit-box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.4);
      -moz-box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.4);
      box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.4);
      span {
        font-size: 18px;
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
export const ContainerLogo = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10rem;

  width: 100%;

  @media (min-width: 1024px) {
    margin-top: 5rem;
    padding: 0 40px;
  }

  > img {
    margin-top: -10rem;
    height: 5rem;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 2rem;

      @media (min-width: 1024px) {
        text-align: center;
        font-size: 1.6rem;
      }

      @media (min-width: 768px) {
        flex-direction: column;
      }

      @media (max-width: 768px) {
        flex-direction: column;
      }
    }
    h2 + h2 {
      margin-left: 6rem;
      @media (min-width: 1024px) {
        margin-left: 0.5rem;
      }
    }

    h2:first-child {
      margin-top: 2rem;
      @media (min-width: 1024px) {
        margin-top: 0rem;
      }
    }

    @media (min-width: 1024px) {
      flex-direction: row;
    }
  }

  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    margin: 0;
  }

  @media (max-width: 700px) {
    margin-top: 300px;
  }
`;

export const Footer = styled.div`
  width: 100%;

  max-width: 1440px;
  height: 80vh;
  font-weight: 500;
  font-size: 1.6rem;
  border: 0;

  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;

  @media (min-width: 1024px) {
    flex-direction: row;
    height: 50vh;
    justify-content: center;

    margin-top: 0rem;
  }

  section {
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: center;
    border: 0;

    h2 {
      font-weight: 500;
      font-size: 0.9rem;
      color: ${colors.colorTextTitle};
      margin-bottom: 0.1rem;

      @media (min-width: 1024px) {
        text-align: initial;
        font-size: 1.6rem;
        margin-right: 0.5rem;
        margin-bottom: 0rem;
      }
    }
    strong {
      font-weight: 700;
      font-size: 0.9rem;
      color: ${colors.colorTextTitle};

      margin-bottom: 1rem;

      @media (min-width: 1024px) {
        text-align: center;
        font-size: 1.6rem;
        margin-right: 0rem;
        margin-bottom: 0rem;
      }
    }

    @media (max-width: 768px) {
      margin-left: 0rem;
    }
  }

  span {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 0.8rem;
    margin-left: 2.5rem;
    margin-bottom: 2rem;

    font-weight: 500;
    font-size: 0.8rem;
    color: ${colors.colorTextTitle};

    @media (min-width: 1024px) {
      margin-bottom: 0;
    }

    @media (max-width: 768px) {
      margin-left: 0rem;
    }

    strong {
      margin-left: 1rem;
      > img {
        height: 0.8rem;
        margin-left: 1rem;
        @media (min-width: 1100px) {
          height: 100%;
        }
      }
    }
  }

  a {
    width: 15rem;
    height: 4rem;
    min-height: 4rem;
    border-radius: 0.4rem;
    font: 700 1.4rem Poppins;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: ${colors.colorButtonText};
    margin-bottom: 2rem;

    transition: background-color 0.2s;
    margin: 1rem;
  }
`;

export const LinkStudy = styled(Link)`
  background: ${colors.colorPrimaryLighter};
  img {
    height: 30px;
    margin-right: 16px;
  }
  &:hover {
    background: ${shade(0.2, `${colors.colorPrimaryLight}`)};
  }
`;

export const LinkGiveClasses = styled(Link)`
  background: ${colors.colorSecundary};
  img {
    margin-right: 16px;
    height: 30px;
  }
  &:hover {
    color: ${colors.colorButtonText};

    background: ${shade(0.2, `${colors.colorSecundaryDark}`)};
  }
`;
