import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppProvider from './hooks';
import Routes from './routes';
import GlobalStyled from './styles/global';

import 'leaflet/dist/leaflet.css';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>
    <GlobalStyled />
  </Router>
);

export default App;
