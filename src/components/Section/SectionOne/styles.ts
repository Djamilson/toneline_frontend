import styled from 'styled-components';

import { colors } from '../../../styles';

export const Container = styled.div`
  z-index: 1;
  background: ${colors.colorBackground02};
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr;

  height: 240vh;
  top: 0;
  right: 0;
  margin-top: 110vh;
  padding: 5rem;

  @media (min-width: 500px) and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    height: 90vh;
  }

  @media (max-width: 499px) {
    padding: 0;
    left: 0;
    //border: 1px solid #f00;
    width: 100%;
    height: 310vh;
  }
  div {
    display: flex;
    width: 100%;
    height: 60vh;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;

    @media (min-width: 1024px) {
      border-right: 1px solid ${colors.colorBackground04};
    }

    align-self: baseline;

    svg {
      color: ${colors.colorBackground01};
      font-size: 60px;
      margin: 1rem 0;
    }
    span {
      font-size: 18px;
      font-weight: bold;
      color: ${colors.colorBackground04};
      text-align: center;
      line-height: 1.2rem;
    }
    p {
      margin-top: 2rem;
      font-size: 16px;
      font-weight: normal;
      color: ${colors.colorTextBase};
      text-align: center;
      letter-spacing: 2px;
    }

    &:last-child {
      border-right: none;
    }

    &:hover {
      transform: scale(1.1);
      background: ${colors.colorBackground01};
      border: 0;
      svg {
        color: ${colors.colorBackground02};
      }

      span {
        color: ${colors.colorBackground04};
      }
      p {
        color: ${colors.colorBackground02};
      }
    }
  }

  @media (max-width: 768px) {
    div:nth-child(odd) {
      border-right: 1px solid ${colors.colorBackground04};
    }
  }
  @media (max-width: 500px) {
    div:nth-child(odd) {
      border-right: none;
    }
  }
`;
