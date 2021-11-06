import { combineReducers } from 'redux';

import {
  commentProcess,
  favoritesProcess,
  offerProcess,
  offersProcess,
  userProcess
} from './reducers';

export enum NameSpace {
  comment = 'COMMENT',
  favorite = 'FAVORITE',
  offer = 'OFFER',
  offers = 'OFFERS',
  user = 'USER',
}
/**
 * @function rootReducer - return root reducer for Redux store
 * */
export const rootReducer = combineReducers({
  [NameSpace.comment]: commentProcess,
  [NameSpace.favorite]: favoritesProcess,
  [NameSpace.offer]: offerProcess,
  [NameSpace.offers]: offersProcess,
  [NameSpace.user]: userProcess,
});

export type RootState = ReturnType<typeof rootReducer>;
