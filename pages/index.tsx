import { useSelector } from "react-redux";
import { AppState } from "../redux/store";

import { NextPage } from "next";

import { fetchPosts } from "../redux/allPosts/actions";
import PostPreview from "components/PostPreview/PostPreview";

const Page: NextPage = () => {
  const posts = useSelector<AppState, any>(state => state.posts.posts);

  return (
    <>
      {posts.map(item => (
        <PostPreview
          key={item.id}
          body={item.body}
          title={item.title}
          id={item.id}
        ></PostPreview>
      ))}
    </>
  );
};

Page.getInitialProps = async ({ store }) => {
  await store.dispatch(fetchPosts());
};
export default Page;
