import { useSelector } from "react-redux";
import { NextPage } from "next";
import { AppState } from "../redux/store";

import Layout from "components/Layout/Layout";
import { fetchItems } from "../redux/actions/actions";
// import { fetchSinglePostAsync } from "../redux/singlePost/actions";
import PostPreview from "components/PostPreview/PostPreview";

const Page: NextPage = () => {
  const posts = useSelector<AppState, any>(state => state.posts.posts);

  return (
    <Layout>
      {/* <button onClick={fetchSinglePostAsync()}>Click to fetch</button> */}
      {posts.map(item => (
        <PostPreview
          key={item.id}
          body={item.body}
          title={item.title}
          id={item.id}
        ></PostPreview>
      ))}
    </Layout>
  );
};

Page.getInitialProps = async ({ store }) => {
  await store.dispatch(fetchItems());
};
export default Page;
