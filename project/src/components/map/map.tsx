import { Marker } from 'leaflet';
import {
  useEffect,
  useRef
} from 'react';

import type { MapProps } from './types';

import { useMap } from '../../hooks';
import { getMarkerIcon } from './marker';

function Map({
  activeOffer,
  city,
  offers,
}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(getMarkerIcon(activeOffer, offer))
          .addTo(map);
      });
    }
  }, [map, offers, activeOffer]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default Map;
