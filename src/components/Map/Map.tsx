import { FC } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import Marker, { MarkerProps } from './Marker';

export interface MapProps {
  markers: MarkerProps[];
}

const Map: FC<MapProps> = ({ markers }) => (
  <ComposableMap projection='geoMercator' projectionConfig={{ scale: 3500, center: [19, 52] }}>
    <Geographies geography='/poland.json'>
      {({ geographies }) =>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
        geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} fill='#5F9EA0' stroke='#3A3A3A' />)
      }
    </Geographies>
    {markers.map(({ articleSlug, city, latitude, longitude }) => (
      <Marker key={articleSlug} articleSlug={articleSlug} city={city} latitude={latitude} longitude={longitude} />
    ))}
  </ComposableMap>
);

export default Map;
