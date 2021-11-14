import type { Actions } from '../../types/action';
import type { CommentProcess } from '../../types/state';

import { ActionType } from '../action-type';

import { getConvertedComments } from '../../adapter';
import { LoadingStatus } from '../../consts';
import { getFilteredCommentsByNewest } from '../../helpers';

const initialState: CommentProcess = {
  allCommentsLoadingStatus: LoadingStatus.Init,
  comments: [],
  newCommentLoadingStatus: LoadingStatus.Init,
};

/**
 * @function commentProcess – Redux reducer for comments
 */
const commentProcess = (state = initialState, action: Actions): CommentProcess => {
  switch (action.type) {

    case ActionType.ChangeCommentLoadingStatus: {
      return {
        ...state,
        newCommentLoadingStatus: action.payload,
      };
    }

    case ActionType.ChangeCommentsLoadingStatus: {
      return {
        ...state,
        allCommentsLoadingStatus: action.payload,
      };
    }

    case ActionType.LoadComments: {
      return {
        ...state,
        comments: getFilteredCommentsByNewest(
          getConvertedComments(action.payload),
        ),
      };
    }

    default: {
      return state;
    }

  }
};

export { commentProcess };
