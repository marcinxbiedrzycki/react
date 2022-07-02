import { FC } from 'react';
import { Marker as MapsMarker } from 'react-simple-maps';
import { Link } from 'react-router-dom';

export interface MarkerProps {
  articleSlug: string;
  city: string;
  latitude: number;
  longitude: number;
}

const Marker: FC<MarkerProps> = ({ articleSlug, city, latitude, longitude }) => (
  <MapsMarker coordinates={[longitude, latitude]}>
    <Link to={`/article/${articleSlug}`}>
      {/* @todo make marker looks better than just dot */}
      <circle r={4} fill='#FF0000' stroke='#3A3A3A' strokeWidth={2} />
      {/* @todo extract styles to css */}
      <text textAnchor='left' x={10} y={10} style={{ fill: '#FFFFFF' }}>
        {city}
      </text>
    </Link>
  </MapsMarker>
);

export default Marker;
