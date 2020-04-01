import {
  PostsState,
  // fetchPostsType, FETCH_POSTS_ASYNC
} from "./types";

const INITIAL_STATE: PostsState = {
  posts: [
    {
      id: 2,
      body: "lorem",
      title: "lorem title",
    },
  ],
};

export const Postsreducer = (
  state = INITIAL_STATE,
  action: any,
): PostsState => {
  switch (action.type) {
    case "SET_POSTS":
      return {
        posts: action.payload,
      };
    default:
      return state;
  }
};
