import {
  Map,
  TileLayer
} from 'leaflet';
import {
  useEffect,
  useState
} from 'react';

import type { MutableRefObject } from 'react';

import type { City } from '../types';
import { Leaflet } from '../leaflet';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      const layer = new TileLayer(
        Leaflet.UrlTemplate,
        { attribution: Leaflet.Attribution },
      );

      instance.addLayer(layer);

      setMap(instance);
    }
  }, [
    city,
    map,
    mapRef,
  ]);

  return map;
}

export { useMap };
