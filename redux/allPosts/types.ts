export const FETCH_POSTS_START = "FETCH_POSTS_START";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR";

export interface Post {
  id: number;
  body: string;
  title: string;
}

export interface FetchPostsStart {
  type: typeof FETCH_POSTS_START;
}

export interface FetchPostsSuccess {
  type: typeof FETCH_POSTS_SUCCESS;
  payload: Post[];
}

export interface FetchPostsError {
  type: typeof FETCH_POSTS_ERROR;
  payload: string;
}

export type fetchPostsActionTypes =
  | FetchPostsError
  | FetchPostsSuccess
  | FetchPostsStart;

export const FETCH_POSTS_ASYNC = "FETCH_POSTS_ASYNC";

export interface PostsState {
  posts: Post[];
  isLoading: boolean;
  errorMsg: string;
}
