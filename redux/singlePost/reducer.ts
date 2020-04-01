import {
  SinglePostState,
  fetchSinglePostActionTypes,
  FETCH_SINGLE_POST_ERROR,
  FETCH_SINGLE_POST_SUCCESS,
  FETCH_SINGLE_POST_START,
} from "./types";

const INITIAL_STATE: SinglePostState = {
  post: null,
  isLoading: false,
  errorMsg: "",
};

export const SinglePostReducer = (
  state = INITIAL_STATE,
  action: fetchSinglePostActionTypes,
): SinglePostState => {
  switch (action.type) {
    case FETCH_SINGLE_POST_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SINGLE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        post: action.payload,
      };
    case FETCH_SINGLE_POST_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };

    default:
      return state;
  }
};
