import type { Offers } from '../../types';

export type OfferListProps = {
  offers: Offers;

  onMouseEnter: (id: string) => void;
  onMouseLeave: () => void;
};
