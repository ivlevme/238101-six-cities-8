import type { Offer, Offers } from '../../types';

const oneOfferMock: Offer = {
  bookmarks: false,
  houseType: 'Apartment',
  id: '1',
  img: 'img/apartment-01.jpg',
  premium: true,
  price: 120,
  title: 'Beautiful & luxurious apartment at great location',
};

const twoOfferMock: Offer = {
  bookmarks: true,
  houseType: 'Private room',
  id: '2',
  img: 'img/room.jpg',
  premium: false,
  price: 80,
  title: 'Wood and stone place',
};

const threeOfferMock: Offer = {
  bookmarks: false,
  houseType: 'Apartment',
  id: '3',
  img: 'img/apartment-02.jpg',
  premium: false,
  price: 132,
  title: 'Canal View Prinsengracht',
};
const fourOfferMock: Offer = {
  bookmarks: false,
  houseType: 'Apartment',
  id: '4',
  img: 'img/apartment-03.jpg',
  premium: true,
  price: 180,
  title: 'Nice, cozy, warm big bed apartment',
};

const fiveOfferMock: Offer = {
  bookmarks: true,
  houseType: 'Private room',
  id: '5',
  img: 'img/room.jpg',
  premium: false,
  price: 80,
  title: 'Wood and stone place',
};

export const offersMock: Offers = [
  oneOfferMock,
  twoOfferMock,
  threeOfferMock,
  fourOfferMock,
  fiveOfferMock,
];
