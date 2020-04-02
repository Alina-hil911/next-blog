///он клинк на а тег
/// ивентс в тайпскрипте
///нам нужно чтобы когда происходил клик
/// запускался фетч

import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchSinglePostAsync } from "../../redux/singlePost/actions";
import { addNewPostStartAsync } from "../../redux/newPost/actions";
import { PostPreview } from "./styled";

type Props = {
  id: number;
  title: string;
  body: string;
  fetchSinglePost: any;
  tr: any;
};

const Post = ({ id, title, body, fetchSinglePost, tr }: Props) => {
  console.log(tr);
  return (
    <PostPreview>
      <button onClick={tr}>lets try</button>
      <p>id: {id}</p>
      <h3>{title}</h3>
      <p>{body}</p>
      <Link href={`/posts/${id}`}>
        <a onClick={() => fetchSinglePost(id)}> Get details</a>
      </Link>
    </PostPreview>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSinglePost: bindActionCreators(fetchSinglePostAsync, dispatch),
    tr: bindActionCreators(addNewPostStartAsync, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Post);
