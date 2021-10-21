import type { Offer } from '../types';

export const oneOfferMock: Offer = {
  bookmark: false,
  houseType: 'Apartment',
  id: '1',
  img: 'img/apartment-01.jpg',
  location: {
    latitude: 40.835292,
    longitude: -73.916236,
    zoom: 8,
  },
  premium: true,
  price: 120,
  title: 'Beautiful & luxurious apartment at great location',
};

export const twoOfferMock: Offer = {
  bookmark: true,
  houseType: 'Private room',
  id: '2',
  img: 'img/room.jpg',
  location: {
    latitude: 40.935292,
    longitude: -73.816236,
    zoom: 8,
  },
  premium: false,
  price: 80,
  title: 'Wood and stone place',
};

export const threeOfferMock: Offer = {
  bookmark: false,
  houseType: 'Apartment',
  id: '3',
  img: 'img/apartment-02.jpg',
  location: {
    latitude: 52.3909553943508,
    longitude: 4.929309666406198,
    zoom: 8,
  },
  premium: false,
  price: 132,
  title: 'Canal View Prinsengracht',
};
const fourOfferMock: Offer = {
  bookmark: false,
  houseType: 'Apartment',
  id: '4',
  img: 'img/apartment-03.jpg',
  location: {
    latitude: 52.3809553943508,
    longitude: 4.939309666406198,
    zoom: 8,
  },
  premium: true,
  price: 180,
  title: 'Nice, cozy, warm big bed apartment',
};

const fiveOfferMock: Offer = {
  bookmark: true,
  houseType: 'Private room',
  id: '5',
  img: 'img/room.jpg',
  location: {
    latitude: 52.3709553943508,
    longitude: 4.919309666406198,
    zoom: 8,
  },
  premium: false,
  price: 80,
  title: 'Wood and stone place',
};

export const nearbyOffersMock: Offer[] = [
  fourOfferMock,
  fiveOfferMock,
];

export const amsterdamOffersMock: Offer[] = [
  fiveOfferMock,
  fourOfferMock,
];

export const parisOffersMock: Offer[] = [
  oneOfferMock,
  twoOfferMock,
];
