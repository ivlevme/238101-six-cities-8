import type {
  Offer,
  OfferBackend
} from '../types';

export const getConvertedOffers = (
  offers: OfferBackend[],
): Offer[] => (offers.map(getConvertedOffer));

export const getConvertedOffer = (
  offer: OfferBackend,
): Offer => ({
  bookmark: offer.is_favorite,
  city: {
    name: offer.city.name,
    location: offer.city.location,
  },
  houseType: offer.type,
  id: offer.id,
  img: offer.preview_image,
  location: {
    latitude: offer.location.latitude,
    longitude: offer.location.longitude,
    zoom: offer.location.zoom,
  },
  premium: offer.is_premium,
  price: offer.price,
  rating: offer.rating,
  title: offer.title,
});

