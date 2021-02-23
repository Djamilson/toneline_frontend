import React from 'react';
import {
  Map as LeafletMap,
  MapProps as LeafletMapProps,
  TileLayer,
} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

interface MapProps extends LeafletMapProps {
  children: React.ReactNode;
}

export default function Mapp({
  children,

  ...props
}: MapProps) {
  return (
    <LeafletMap
      center={[-27.2092052, -49.6401092]}
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
  );
}
