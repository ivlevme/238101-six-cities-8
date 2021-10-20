import {
  LayerGroup,
  Marker
} from 'leaflet';
import {
  useEffect,
  useMemo,
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
  const layerGroup = useMemo(() => new LayerGroup(), []);

  useEffect(() => {
    if (map) {
      layerGroup.clearLayers();
      map.flyTo(
        [
          city.location.latitude,
          city.location.longitude,
        ],
        city.location.zoom,
      );

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(getMarkerIcon(activeOffer, offer))
          .removeFrom(map)
          .addTo(layerGroup);
      });

      layerGroup.addTo(map);
    }
  }, [
    activeOffer,
    city,
    layerGroup,
    map,
    offers,
  ]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    />);
}

export default Map;
