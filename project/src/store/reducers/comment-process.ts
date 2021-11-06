import type { Actions } from '../../types/action';
import type { CommentProcess } from '../../types/state';

import { ActionType } from '../action';

import { LoadingStatus } from '../../consts';
import { getConvertedComments } from '../../adapter';

const initialState: CommentProcess = {
  comments: [],
  loadingStatus: LoadingStatus.Init,
};

/**
 * @function commentProcess – Redux reducer for comments
 */
const commentProcess = (state = initialState, action: Actions): CommentProcess => {
  switch (action.type) {

    case ActionType.ChangeCommentLoadingStatus: {
      return {
        ...state,
        loadingStatus: action.payload,
      };
    }

    case ActionType.LoadComments: {
      return {
        ...state,
        comments: getConvertedComments(action.payload),
      };
    }

    default: {
      return state;
    }

  }
};

export { commentProcess };
