import type {
  HandleOfferMouseEnter,
  HandleOfferMouseLeave,
  Offers
} from '../../types';

export type OfferListProps = {
  offers: Offers;
  onMouseEnter: HandleOfferMouseEnter;
  onMouseLeave: HandleOfferMouseLeave;
};
