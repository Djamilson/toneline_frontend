import styled, { css } from 'styled-components';

import { colors } from '../../../styles';
import Tooltip from '../../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 7px;
  border: 1px solid ${colors.colorLineInWhite};
  padding: 0;
  width: 100%;
  padding-bottom: 7.8px;
  background: ${colors.colorInputBackground};

  color: #666360;
  align-items: center;

  & + div {
    margin-top: 0.5rem;
  }

  margin-bottom: 1em;
  transition: all 0.3s;

  &:focus-within {
    transform: scale(1.05, 1.05);
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${colors.fourth};
      margin-top: -10px;
      height: 41px;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: ${colors.colorPrimary};
      border-color: ${colors.colorPrimaryDarker};
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: ${colors.colorPrimaryDarker};
    `}


  input {
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.01);
    border-radius: 0px 7px 7px 0;
    border: 1px solid ${colors.colorLineInWhite};
    border-style: none none none none;
    transition: all 0.5s;
    padding: 11px;
    margin-left: 2.5rem;
    width: 90.5%;
    color: ${colors.colorTextcomplement};

    ${(props) =>
      props.isErrored &&
      css`
        padding: 10px;
        margin-top: 2px;
      `}

    &::placeholder {
      color: transparent;
    }
    &:active,
    &:focus,
    &:not(:placeholder-shown),
    &:-webkit-autofill {
      & + label {
        box-shadow: none;
        outline: none;
        border-color: ${colors.colorBackground01};
        transform: translateY(-4.3em) scale(0.8);
        margin-left: 0em;
      }
    }
  }

  svg {
    color: #f00;
    display: block;
    margin-top: -3.7rem;
    margin-left: 10px;
  }

  label {
    display: block;
    margin-top: 10px;
    margin-left: 4em;
    font-size: 1em;
    color: #aaa;

    opacity: 1;
    transform: translateY(-2.5em);

    transform-origin: 0 0;
    transition: all 0.3s;

    ${(props) =>
      props.isErrored &&
      css`
        margin-top: 0.4rem;
      `}
  }

  input:hover + label,
  label:hover {
    box-shadow: none;
    outline: none;
    border-color: ${colors.colorBackground01};
    transform: translateY(-4.3em) scale(0.8);
    margin-left: 0em;

    ${(props) =>
      props.isErrored &&
      css`
        transform: translateY(-4.4em) scale(0.8);
      `}
  }
`;

export const Error = styled(Tooltip)`
  z-index: 9;
  height: 20px;
  left: 90%;
  top: -50px;
  display: block;
  padding-right: 10px;

  svg {
    margin-right: 0px;
    left: 90%;
    margin-top: 30px;
  }

  span {
    background: ${colors.fourth};
    color: ${colors.sixth};
    left: 0;
    margin-top: -70px;
    margin-left: 20px;
    &::before {
      z-index: 100;
      border-color: ${colors.fourth} transparent;
    }
  }
`;
