import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

function GooGleMAP() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: '',
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div>
      <GoogleMap zoom={10} center={{ lat: 13, lng: 100 }}>
        <Marker position={{ lat: 13, lng: 100 }}></Marker>
      </GoogleMap>
    </div>
  );
}

export default GooGleMAP;
