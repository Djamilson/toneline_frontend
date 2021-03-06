import React from 'react';

import { Wrapper, Content } from './styles';

interface AuthLayoutProps {
  className?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ className, children }) => {
  return (
    <Wrapper className={className}>
      <Content> {children} </Content>
    </Wrapper>
  );
};

export default AuthLayout;
