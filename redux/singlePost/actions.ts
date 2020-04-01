import axios from "axios";

import {
  SinglePost,
  FETCH_SINGLE_POST_START,
  FETCH_SINGLE_POST_SUCCESS,
  FETCH_SINGLE_POST_ERROR,
  fetchSinglePostSuccessType,
  fetchSinglePostStartType,
  fetchSinglePostErrorType,
} from "./types";

export const fetchSinglePostSuccess = (
  post: SinglePost,
): fetchSinglePostSuccessType => ({
  type: FETCH_SINGLE_POST_SUCCESS,
  payload: post,
});

export const fetchSinglePostStart = (id: number): fetchSinglePostStartType => ({
  type: FETCH_SINGLE_POST_START,
  payload: id,
});

export const fetchSinglePostError = (
  errorMsg: string,
): fetchSinglePostErrorType => ({
  type: FETCH_SINGLE_POST_ERROR,
  payload: errorMsg,
});

export const fetchSinglePostAsync = (id): any => {
  return dispatch =>
    axios
      .get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)
      .then(({ data }) => data)
      .then(data =>
        dispatch(
          fetchSinglePostSuccess({
            id: data.id,
            title: data.title,
            body: data.body,
            comments: data.comments,
          }),
        ),
      );
};
