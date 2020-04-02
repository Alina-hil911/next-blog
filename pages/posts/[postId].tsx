import { Post, Comments } from "./styledSinglePost";
import { useSelector } from "react-redux";
import { NextPage } from "next";
import { AppState } from "../../redux/store";
import Link from "next/link";

import { fetchSinglePostAsync } from "../../redux/singlePost/actions";

const PostDetail: NextPage = () => {
  const post = useSelector<AppState, any>(state => state.singlePost.post);
  return (
    <Post>
      <h2>{post.title}</h2>
      <p>{post.body} </p>
      <Comments>
        {post.comments && post.comments.length ? (
          <>
            <h3>comments: </h3>
            {post.comments.map(comment => (
              <span key={Date.now()}>{comment.body}</span>
            ))}
          </>
        ) : (
          <p>No comments to this post</p>
        )}
      </Comments>
      <Link href="/">
        <a>Go to the main page</a>
      </Link>
    </Post>
  );
};

PostDetail.getInitialProps = async ({ store, query }) => {
  await store.dispatch(fetchSinglePostAsync(query.postId.toString()));
};

export default PostDetail;
