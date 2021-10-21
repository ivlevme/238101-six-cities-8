import type {
  HandleOfferMouseEnter,
  HandleOfferMouseLeave,
  Offer
} from '../../types';

export type OfferListProps = {
  offers: Offer[];
  onMouseEnter: HandleOfferMouseEnter;
  onMouseLeave: HandleOfferMouseLeave;
};
