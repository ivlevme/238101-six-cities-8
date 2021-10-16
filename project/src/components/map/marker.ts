import { Icon } from 'leaflet';

import type { ActiveOffer, Offer } from '../../types';

const defaultCustomIcon = new Icon({
  iconUrl: `${process.env.PUBLIC_URL}/img/pin.svg`,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const activeCustomIcon = new Icon({
  iconUrl: `${process.env.PUBLIC_URL}/img/pin-active.svg`,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export const getMarkerIcon = (active: ActiveOffer, current: Offer): Icon =>
  active && current.id === active.id ? activeCustomIcon : defaultCustomIcon;
