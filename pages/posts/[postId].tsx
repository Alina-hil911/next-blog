import { Post } from "./styledSinglePost";
import { useSelector } from "react-redux";
import { NextPage } from "next";
import { AppState } from "../../redux/store";

import { fetchSinglePostAsync } from "../../redux/singlePost/actions";

const PostDetail: NextPage = () => {
  const post = useSelector<AppState, any>(state => state.singlePost.post);
  console.log(post);
  return (
    <Post>
      <h2>{post.title}</h2>
      <p>{post.body} </p>
      <div className="Post__comments"></div>
    </Post>
  );
};

PostDetail.getInitialProps = async ({ store, query }) => {
  await store.dispatch(fetchSinglePostAsync(query.postId));
};
/// нужен отдельный компонент на каждый коммент
export default PostDetail;
