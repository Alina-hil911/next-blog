import Link from "next/link";

import { PostPreview } from "./styled";

type Props = {
  title: string;
  body: string;
  id: number;
};

const Post = ({ title, body, id }: Props) => {
  return (
    <PostPreview>
      <h3>Title: {title}</h3>
      <p>{body}</p>
      <Link href={`/posts/${id}`}>
        <a> Get details</a>
      </Link>
    </PostPreview>
  );
};

export default Post;
