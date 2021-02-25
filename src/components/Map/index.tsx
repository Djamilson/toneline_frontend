import React from 'react';
import {
  Map as LeafletMap,
  MapProps as LeafletMapProps,
  TileLayer,
} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import { Container } from './styles';

interface MapProps extends LeafletMapProps {
  children: React.ReactNode;
}

export default function Mapp({
  children,

  ...props
}: MapProps) {
  return (
    <Container>
      <LeafletMap
        center={[-10.183906, -48.309326]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
        dragging
        touchZoom
        zoomControl
        scrollWheelZoom
        doubleClickZoom
        {...props}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        {children}
      </LeafletMap>
    </Container>
  );
}
