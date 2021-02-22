import styled from 'styled-components';

import { colors } from '../../../styles';

export const Container = styled.div`
  z-index: 1;
  background: ${colors.colorBackground02};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  margin-top: 110vh;
  padding: 5rem 10rem;

  div {
    background: ${colors.colorBackground02};
    -webkit-box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.4);

    transition: transform 0.8s;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;

    transition: transform 0.8s;

    &:hover {
      transform: translateY(-20px);
    }

    img {
      margin-top: -70px;

      display: inline-block;
      width: 140px;
      height: 140px;
      text-align: center;
      border-radius: 50%;

      line-height: 140px;
      vertical-align: middle;

      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    }
    article {
      display: flex;
      align-content: center;
      justify-content: center;
      width: 100%;
      height: 55vh;

      flex-direction: column;
      padding: 1rem;

      p {
        margin-top: 1rem;
        font-size: 16px;
        font-weight: normal;
        color: ${colors.colorTextBase};
        text-align: center;
        line-height: 23px;
      }

      h1 {
        font-size: 18px;
        font-weight: bold;
        color: ${colors.colorBackground01};
        margin-top: 2rem;
      }
    }
  }

  div + div {
    margin-left: 25px;
  }
`;
