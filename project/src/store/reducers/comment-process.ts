import type { Actions } from '../../types/action';
import type { CommentProcess } from '../../types/state';

import { ActionType } from '../action';

import { CommentLoadingStatus } from '../../consts';
import { getConvertedComments } from '../../adapter';

const initialState: CommentProcess = {
  commentLoadingStatus: CommentLoadingStatus.Init,
  comments: [],
};

/**
 * @function commentProcess – Redux reducer for comments
 */
const commentProcess = (state = initialState, action: Actions): CommentProcess => {
  switch (action.type) {
    case ActionType.ChangeCommentLoadingStatus:
      return {
        ...state,
        commentLoadingStatus: action.payload,
      };
    case ActionType.LoadComments:
      return {
        ...state,
        comments: getConvertedComments(action.payload),
      };

    default:
      return state;
  }
};

export { commentProcess };
