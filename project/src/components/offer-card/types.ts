import type {
  HandleOfferMouseEnter,
  HandleOfferMouseLeave,
  Offer
} from '../../types';

export type OfferCardProps = {
  offer: Offer;
  onMouseEnter: HandleOfferMouseEnter;
  onMouseLeave: HandleOfferMouseLeave;
};
