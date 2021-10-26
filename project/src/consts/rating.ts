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
