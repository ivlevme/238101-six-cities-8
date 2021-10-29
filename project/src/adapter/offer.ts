import type {
  Offer,
  OfferBackend
} from '../types';

export const getConvertedOffer = (
  offer: OfferBackend,
): Offer => ({
  bedrooms: offer.bedrooms,
  bookmark: offer.is_favorite,
  city: {
    name: offer.city.name,
    location: offer.city.location,
  },
  description: offer.description,
  goods: offer.goods,
  houseType: offer.type,
  id: offer.id,
  images: offer.images,
  previewImg: offer.preview_image,
  location: {
    latitude: offer.location.latitude,
    longitude: offer.location.longitude,
    zoom: offer.location.zoom,
  },
  maxAdults: offer.max_adults,
  premium: offer.is_premium,
  price: offer.price,
  rating: offer.rating,
  title: offer.title,
  host: {
    avatarUrl: offer.host.avatar_url,
    id: offer.host.id,
    isPro: offer.host.is_pro,
    name: offer.host.name,
  },
});

export const getConvertedOffers = (
  offers: OfferBackend[],
): Offer[] => (offers.map(getConvertedOffer));
