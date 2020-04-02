import { useSelector } from "react-redux";
import { NextPage } from "next";
import { AppState } from "../redux/store";

import { fetchPosts } from "../redux/allPosts/actions";
import PostPreview from "components/PostPreview/PostPreview";

const Page: NextPage = () => {
  const posts = useSelector<AppState, any>(state => state.posts.posts);
  console.log("posts", posts);
  return (
    <>
      {/* <button onClick={fetchSinglePostAsync()}>Click to fetch</button> */}
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
  console.log("works");
  await store.dispatch(fetchPosts());
  console.log("posts", store);
};
export default Page;
