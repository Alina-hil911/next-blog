import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";

import Layout from "components/Layout/Layout";
import { Post } from "./styledSinglePost";

/// тут надо проверять есть ли пост с таким айди
export default () => {
  const post = useSelector<AppState, any>(state => state.singlePost);
  console.log(post, "post");
  return (
    <Layout>
      <Post>
        <h3>Sunt aut facere repellat provident occaecati</h3>
        <p>Quia et suscipit suscipit recusandae consequuntur expedita </p>
        <div className="Post__comments"></div>
      </Post>
    </Layout>
  );
};

/// нужен отдельный компонент на каждый коммент
