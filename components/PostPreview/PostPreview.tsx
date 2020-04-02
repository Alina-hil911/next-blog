import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Link from "next/link";

import { fetchSinglePostAsync } from "../../redux/singlePost/actions";
import { PostPreview } from "./styled";

type Props = {
  id: number;
  title: string;
  body: string;
};

//шоб компонент пейдж дитейл на отдельной странице знал какие детали ему показывать

const Post = ({ id, title, body }: Props) => {
  //<Link href={{ pathname: '/search', query: { keyword: 'this way' } }}><a>path</a></Link>
  return (
    <PostPreview>
      <p>id: {id}</p>
      <h3>{title}</h3>
      <p>{body}</p>
      <Link href={`/posts/${id}`}>
        <a onClick={() => setIdToFetch(id)}> Get details</a>
      </Link>
    </PostPreview>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSinglePost: bindActionCreators(fetchSinglePostAsync, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Post);
