export const FETCH_SINGLE_POST_START = "FETCH_SINGLE_POST_START";
export const FETCH_SINGLE_POST_SUCCESS = "FETCH_SINGLE_POST_SUCCESS";
export const FETCH_SINGLE_POST_ERROR = "FETCH_SINGLE_POST_ERROR";

interface fetchSinglePostStart {
  type: typeof FETCH_SINGLE_POST_START;
}

export type fetchSinglePostStartType = fetchSinglePostStart;

interface fetchSinglePostSuccess {
  type: typeof FETCH_SINGLE_POST_SUCCESS;
  payload: object;
}

export type fetchSinglePostSuccessType = fetchSinglePostSuccess;

interface fetchSinglePostError {
  type: typeof FETCH_SINGLE_POST_ERROR;
  payload: string;
}

export type fetchSinglePostErrorType = fetchSinglePostError;

export type fetchSinglePostActionTypes =
  | fetchSinglePostErrorType
  | fetchSinglePostStartType
  | fetchSinglePostSuccessType;

export interface SinglePost {
  id: number;
  title: string;
  body: string;
  comments: [];
}

export interface SinglePostState {
  post: null | object;
  isLoading: boolean;
  errorMsg: string;
}
