import { combineReducers } from 'redux';

import {
  commentProcess,
  offerProcess,
  offersProcess,
  userProcess
} from './reducers';

export enum NameSpace {
  city = 'CITY',
  comment = 'COMMENT',
  offer = 'OFFER',
  offers = 'OFFERS',
  sorting = 'SORTING',
  user = 'USER',
}
/**
 * @function rootReducer - return root reducer for Redux store
 * */
export const rootReducer = combineReducers({
  [NameSpace.comment]: commentProcess,
  [NameSpace.offer]: offerProcess,
  [NameSpace.offers]: offersProcess,
  [NameSpace.user]: userProcess,
});

export type RootState = ReturnType<typeof rootReducer>;
