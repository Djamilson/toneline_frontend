import { Form as Unform } from '@unform/web';
import { shade } from 'polished';
import styled from 'styled-components';

import backgroundUnsplash from '../../../assets/design-removebg-preview.png';
import { colors } from '../../../styles';
import MyButton from '../../Button';

export const Container = styled.div`
  z-index: 1;
  background: ${colors.colorBackground02};
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 1rem;

  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  margin-top: 110vh;
  padding: 5rem 5rem 5rem 10rem;
`;

export const Form = styled(Unform)`
  width: 500px;
  min-width: 400px;
  padding: 30px;
  flex-direction: column;
  background: ${colors.colorBoxBase};
  border: 0;
  //border-radius: 8px;
  -webkit-box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.4);
  box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.4);
  transition: all 0.2s ease-in-out;

  fieldset {
    border: 0;
    padding: 0rem;
    padding-bottom: 20px;
    margin-top: 0rem;
    width: 100%;

    float: left;
  }
`;

export const Button = styled(MyButton)`
  background: ${colors.colorBackground01};
  border-radius: 8px;
  width: 100%;
  &:hover {
    background: ${shade(0.2, `${colors.colorBackground01}`)};
  }
`;

export const Content = styled.div`
  z-index: 1;
  background: ${colors.colorBackground01};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  top: 0;
  right: 0;

  padding-left: 5rem;

  section {
    background: url(${backgroundUnsplash}) no-repeat center;
    background-size: auto 100%;
    flex-direction: column;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 50px;
      font-weight: bold;
      color: ${colors.colorTitleInPrimary};
      text-align: center;
      line-height: 1.2rem;
      margin-top: 50px;
    }
    p {
      margin-top: 4rem;
      margin-right: 150px;
      font-size: 16px;
      font-weight: normal;
      color: ${colors.colorTitleInPrimary};
      text-align: center;
      letter-spacing: 2px;
    }
  }
`;

export const Line = styled.div`
  margin-top: 0px;
  margin-right: 1rem;
  width: 240px;

  min-width: 200px;
  max-width: 240px;
  background: ${colors.colorBackground01};
  height: 40px;
  float: left;
  position: absolute;

  border-radius: 0;

  -webkit-box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.4);
  transition: all 0.2s ease-in-out;
`;
export const Point = styled.div`
  display: inline-block;
  font-size: 20pt; //Width of pointer
  width: 400px;
  height: 4em;
  position: relative;
  background: gray;
  text-align: center;
  vertical-align: middle;
  margin: 0.6em;
`;

export const PointerMini = styled.div`
  display: inline-block;
  font-size: 20pt; //Width of pointer
  width: 300px;
  height: 2em;
  position: relative;
  background: ${colors.colorBackground01};
  text-align: center;
  vertical-align: middle;

  margin-left: -6rem;

  top: 1rem;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 1.25em solid white;
    //border-top: 1em solid transparent;
    //border-bottom: 1em solid transparent;
  }
  &:before {
    content: '';
    position: absolute;
    right: -1.25em;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 1.25em solid ${colors.colorBackground01};
    border-top: 1em solid transparent;
    border-bottom: 1em solid transparent;
  }
`;

export const Cnt = styled.div`
  position: relative;
  top: 0.25em;
  left: 1em;
  color: white;
`;

export const ContentInpunt = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
`;
