import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = () => {
  const lat = 59.955413;
  const lng = 30.337844;

  const AnyReactComponent = ({ text, lat, lng }: { text: string, lat: number, lng: number }) => 
    <div>{text}</div>

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCg8E4aqfFA7gT1N8ngA2LgfKqlkCunngc' }}
        defaultCenter={{ lat, lng }}
        defaultZoom={11}
      >
        <AnyReactComponent lat={lat} lng={lng} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;


// 'AIzaSyCg8E4aqfFA7gT1N8ngA2LgfKqlkCunngc'