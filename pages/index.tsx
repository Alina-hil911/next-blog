import { useSelector } from "react-redux";
import { NextPage } from "next";
import { RootState } from "../redux/store";

import Layout from "components/Layout/Layout";
import { fetchItems } from "../redux/actions/actions";
import PostPreview from "components/PostPreview/PostPreview";

interface Props {
  custom: string;
}

const Page: NextPage<Props> = props => {
  const posts = useSelector<RootState, RootState["posts"]>(
    state => state.posts,
  );
  console.log(posts);

  return (
    <Layout>
      {posts.map(item => (
        <PostPreview
          key={item.id}
          body={item.body}
          title={item.title}
          id={item.id}
        ></PostPreview>
      ))}
      <div>Prop from getInitialProps {props.custom}</div>
    </Layout>
  );
};

Page.getInitialProps = async ({ store }) => {
  await store.dispatch(fetchItems());
  return {
    custom: "custom string",
  };
};
export default Page;
