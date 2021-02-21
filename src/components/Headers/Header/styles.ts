import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { colors } from '../../../styles';
import { px2vw } from '../../../utils/px2vw';

interface Props {
  visible: boolean;
}

export const Container = styled.div<Props>`
  position: fixed;
  transition: all 0.5s ease;
  width: 100%;
  padding: 0 5rem;
  top: 0;
  right: 0;

  background: ${colors.colorBackground01};
  border: 0;
  z-index: 2;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6);
  -o-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6);
`;
export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 22;
    }
    strong {
      margin-left: 15px;
      font-size: 16px;
      color: ${colors.colorTitleInPrimary};
    }
  }
`;

export const Content = styled.div`
  height: 40px;
  width: ${px2vw(-1)};

  display: flex;
  align-items: center;
  flex-direction: row;
  border: 0;

  @media (min-width: 1024px) {
    margin: 0;
    padding: 0;
    width: 100%;
  }

  @media (min-width: 425px) {
    justify-content: space-between;
  }
`;

export const NavLink = styled(Link)`
  img {
    height: 3rem;
  }

  @media (max-width: 424px) {
    margin-left: calc(100% - 180px);
  }
`;

export const ProfileLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  width: 135px;

  &:hover {
    opacity: 0.7;
  }
  svg {
    color: ${colors.colorTitleInPrimary};
    width: 40px;
    height: 40px;
  }
  div {
    width: 100%;
    text-align: right;
    strong {
      color: ${colors.colorTitleInPrimary};
    }
    span {
      font-size: 12px;
      color: ${colors.colorTextInPrimary};
    }
  }
`;

export const Profile = styled.div`
  display: none;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid #f00;
  margin-left: 20px;
  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: ${colors.colorButtonText};
      font-weight: bold;
    }
    span {
      display: block;
      margin-top: 2px;
      font-size: 12px;
    }
  }

  img {
    height: 36px;
    width: 36px;
    border-radius: 50%;
  }

  @media (min-width: 425px) {
    display: flex;
  }
`;

export const Badge = styled.button`
  display: none;
  background: none;
  border: 0;
  width: 60px;
  min-width: 60px;
  max-width: 60px;

  align-items: initial;
  flex-direction: row;

  justify-content: space-between;
  margin-left: 20px;
  text-decoration: none;
  transition: opacity 0.2s;
  height: 2.6rem;
  &:hover {
    opacity: 0.7;
  }
  strong {
    font-size: 16px;
    color: ${colors.colorTextInPrimary};
  }
  span {
    svg {
      font-size: 22px;
      color: ${colors.colorTitleInPrimary};
    }
  }
  @media (min-width: 764px) {
    display: flex;
  }
`;
