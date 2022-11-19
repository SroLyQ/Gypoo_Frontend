import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

function GooGleMAP() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: '',
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div>
      <iframe
        className=" w-full h-[250px]"
        loading="lazy"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.8171412689567!2d100.55652471527397!3d13.72951810150744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f1bbc1ff399%3A0x272f7997bda0bbf6!2z4Liq4Lin4LiZ4LmA4Lia4LiN4LiI4LiB4Li04LiV4Li0!5e0!3m2!1sth!2sth!4v1668858632571!5m2!1sth!2sth"
      />
    </div>
  );
}

export default GooGleMAP;
