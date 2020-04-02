import {
  PostsState,
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
} from "./types";

const INITIAL_STATE: PostsState = {
  posts: [],
  isLoading: false,
  errorMsg: "",
};

export const Postsreducer = (
  state = INITIAL_STATE,
  action: any,
): PostsState => {
  switch (action.type) {
    case FETCH_POSTS_START:
      console.log("works from reducer");
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
      };
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};
