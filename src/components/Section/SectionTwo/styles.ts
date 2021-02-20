import styled from 'styled-components';

import { colors } from '../../../styles';

export const Container = styled.div`
  z-index: 2;
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
