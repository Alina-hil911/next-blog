import { useSelector } from "react-redux";
import { AppState } from "../redux/store";
import { NextPage } from "next";

import { fetchItems } from "../redux/allPosts/actions";
import PostPreview from "components/PostPreview/PostPreview";

const Page: NextPage = () => {
  const posts = useSelector<AppState, any>(state => {
    console.log(state);
    return state.posts.posts;
  });

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
  await store.dispatch(fetchItems());
};
export default Page;
