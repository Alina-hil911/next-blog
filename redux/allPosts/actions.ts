import axios from "axios";

import {
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  Post,
} from "./types";

export const fetchPostsStart = () => ({
  type: FETCH_POSTS_START,
});

export const fetchPostsSuccess = (post: Post) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: post,
});
export const fetchPostsError = (errorMsg: string) => ({
  type: FETCH_POSTS_ERROR,
  payload: errorMsg,
});

export function fetchItems(): any {
  return dispatch => {
    dispatch(fetchPostsStart());
    return axios
      .get("https://simple-blog-api.crew.red/posts")
      .then(({ data }) => data)
      .then(items => dispatch({ type: FETCH_POSTS_SUCCESS, payload: items }))
      .catch(e => dispatch(fetchPostsError(e.message)));
  };
}
