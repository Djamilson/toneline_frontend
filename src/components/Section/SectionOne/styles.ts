import styled from 'styled-components';

import { colors } from '../../../styles';

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
    flex-grow: 1;
    align-content: flex-start;
    justify-content: space-around;
    width: 100%;
    height: 30vh;
    flex-direction: column;
    margin: 1rem;
    border-right: 2px solid ${colors.colorTextInWhite};

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

    &:last-child {
      border-right: none;
    }
  }
`;
