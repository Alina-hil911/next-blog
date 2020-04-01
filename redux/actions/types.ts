export const FETCH_POSTS_ASYNC = "FETCH_POSTS_ASYNC";

interface fetchPostsAction {
  type: typeof FETCH_POSTS_ASYNC;
  payload?: any;
  //   ИСПРАВИТЬ
}

export type fetchPostsType = fetchPostsAction;

export interface Post {
  id: number;
  body: string;
  title: string;
}

export interface PostsState {
  posts: Post[];
}
