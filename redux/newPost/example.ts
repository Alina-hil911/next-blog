// store/session/actions.ts
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
// Action Definition
export interface SetAction {
  type: "SET";
  accessToken: string;
}
export interface SetFetcing {
  type: "SET_FETCHING";
  isFetching: boolean;
}
// Union Action Types
export type Action = SetAction | SetFetcing;
// Action Creators
export const set = (accessToken: string): SetAction => {
  return { type: "SET", accessToken };
};
export const isFetching = (isFetching: boolean): SetFetcing => {
  return { type: "SET_FETCHING", isFetching };
};











export const addNewPostStartAsync = (body: string, title: string): ThunkAction<Promise<void>, {}, {}, AnyAction>  => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        return new Promise<void>(resolve => {
            dispatch(addNewPost({body, title}));
            axios({
        method: "post",
        url: "https://simple-blog-api.crew.red/posts",
        data: { title: title, body: body },
        headers: { "Content-Type": "application/json" },
      })
        .then(({ data }) => data)
        .then(() => dispatch(addNewPostSuccess()))
        .catch(e => dispatch(addNewPostError(e.message)));
    };
        )
}
}






export const login = (
  username: string,
  password: string,
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  // Invoke API
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return new Promise<void>(resolve => {
      dispatch(isFetching(true));
 
      setTimeout(() => {
        dispatch(set("this_is_access_token"));
        setTimeout(() => {
          dispatch(isFetching(false));
          console.log("Login done");
          resolve();
        }, 1000);
      }, 3000);
    });
  };
};

export const fetchSinglePostAsync = (id:number): ThunkAction<Promise<void>, {}, {}, AnyAction>  => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> =>
  return new Promise<void>(resolve => {
    dispatch(fetchSinglePostStart())
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