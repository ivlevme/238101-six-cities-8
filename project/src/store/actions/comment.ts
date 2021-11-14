import { createAction } from '@reduxjs/toolkit';

import { ActionType } from '../action-type';
import { LoadingStatus } from '../../consts';

/**
 * @function changeCommentLoadingStatusAction - Action creator for change
 * loading status for adding new comment
 * @param status - status loading
 * */
export const changeCommentLoadingStatusAction = createAction(
  ActionType.ChangeCommentLoadingStatus,
  (status: LoadingStatus) => ({
    payload: status,
  }),
);
/**
 * @function changeCommentsLoadingStatusAction - Action creator for change
 * loading status for all comments
 * @param status - status loading
 * */
export const changeCommentsLoadingStatusAction = createAction(
  ActionType.ChangeCommentsLoadingStatus,
  (status: LoadingStatus) => ({
    payload: status,
  }),
);
