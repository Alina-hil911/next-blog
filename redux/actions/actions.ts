import axios from "axios";

import { fetchPostsType } from "./types";
// import { AnyAction, bindActionCreators } from "redux";
// import { Action } from "redux";
// TypeScript infers that this function is returning SendMessageAction
// export function sendMessage(newMessage: Message): ChatActionTypes {
//     return {
//       type: SEND_MESSAGE,
//       payload: newMessage
//     }h
//   }
export const fetchPosts = (): fetchPostsType => {
  return {
    type: "FETCH_POSTS_ASYNC",
  };
};

export function fetchItems(): any {
  return dispatch =>
    axios
      .get("https://simple-blog-api.crew.red/posts")
      .then(({ data }) => data)
      .then(items => dispatch({ type: "SET_POSTS", payload: items }));
}
