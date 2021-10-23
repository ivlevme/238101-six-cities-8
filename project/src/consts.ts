export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum BookmarksText {
  Active = 'In bookmarks',
  InActive = 'To bookmarks',
}

export enum NameCity {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum Rating {
  NotDefined = 0,
  Terribly = 1,
  Badly = 2,
  NotBad = 3,
  Good = 4,
  Perfect = 5,
}

export const RatingStyleWidth = {
  0: '0%',
  1: '20%',
  2: '40%',
  3: '60%',
  4: '80%',
  5: '100%',
} as const;

export enum Sorting {
  Popular = 'Popular',
  PriceHigh = 'Price: high to low',
  PriceLow = 'Price: low to high',
  TopRated = 'Top rated first',
}


