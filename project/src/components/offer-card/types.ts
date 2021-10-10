export type OfferCardProps = {
  bookmarks: boolean;
  houseType: string;
  id: string;
  img: string;
  premium: boolean;
  price: number;
  title: string;

  onMouseEnter: (id: string) => void;
  onMouseLeave: () => void;
};
