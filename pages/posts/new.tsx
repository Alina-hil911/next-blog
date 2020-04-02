import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Layout from "components/Layout/Layout";
import { NewPost } from "./styledNewPost";
import { addNewPostStartAsync } from "../../redux/newPost/actions";

const New = ({ addNewPost }) => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const handleSubmit = (e: React.MouseEvent): void => {
    e.preventDefault();
    addNewPost(post, title);
  };

  return (
    <Layout>
      <NewPost>
        <h2>Create a new post!</h2>
        <form>
          <div>
            <input
              autoComplete="false"
              type="text"
              name="name"
              id="name"
              value={title}
              placeholder=" Enter the post title"
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div>
            <textarea
              id="post"
              name="post"
              rows={10}
              cols={33}
              value={post}
              onChange={e => setPost(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" onClick={e => handleSubmit(e)}>
            Submit your post
          </button>
        </form>
      </NewPost>
    </Layout>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addNewPost: bindActionCreators(addNewPostStartAsync, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(New);
