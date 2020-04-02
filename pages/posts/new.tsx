import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { bindActionCreators } from "redux";
import Link from "next/link";

import { NewPost } from "./styledNewPost";
import { addNewPostStartAsync } from "../../redux/newPost/actions";

const New = ({ addNewPost }) => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(true);

  const handleSubmit = (e: React.MouseEvent): void => {
    e.preventDefault();
    addNewPost(post, title);
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (title.length > 3 && post.length > 3) {
      setError(false);
    }
  }, [title, post]);

  return (
    <NewPost>
      {isSubmitted ? (
        <>
          <h2>Your post was submitted!</h2>
          <Link href="/">
            <a>Go to the main page</a>
          </Link>
        </>
      ) : (
        <>
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
            {error && (
              <p>
                Your title and your post both must be more thez3 characters
                long!
              </p>
            )}
            <button
              disabled={error}
              type="submit"
              onClick={e => handleSubmit(e)}
            >
              Submit your post
            </button>
          </form>
        </>
      )}
    </NewPost>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addNewPost: bindActionCreators(addNewPostStartAsync, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(New);
