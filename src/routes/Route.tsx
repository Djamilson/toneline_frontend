import React, { useCallback, useEffect } from 'react';
import GoogleAnalytics from 'react-ga';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
  requiredRoles?: string[];
}

const Route: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  const trackPageView = (location) => {
    GoogleAnalytics.set({ page: location.pathname });
    GoogleAnalytics.pageview(location.pathname);
  };

  const initGa = (history) => {
    GoogleAnalytics.initialize('G-WR9M2RFQ3Y', {
      debug: true,
    });
    trackPageView(history.location);
    history.listen(trackPageView);
  };
  const history = useHistory();

  initGa(history);

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return <Component />;
      }}
    />
  );
};

export default Route;
