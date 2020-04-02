import {
  NewPostState,
  addNewPostActionTypes,
  ADD_NEW_POST_START,
  ADD_NEW_POST_SUCCESS,
  ADD_NEW_POST_ERROR,
} from "./types";

const INITIAL_STATE: NewPostState = {
  isLoading: false,
  post: null,
  errorMsg: "",
};

export const NewPostReducer = (
  state = INITIAL_STATE,
  action: addNewPostActionTypes,
): NewPostState => {
  switch (action.type) {
    case ADD_NEW_POST_START:
      return {
        ...state,
        isLoading: true,
        post: action.payload,
      };
    case ADD_NEW_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        post: null,
      };
    case ADD_NEW_POST_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };

    default:
      return state;
  }
};
