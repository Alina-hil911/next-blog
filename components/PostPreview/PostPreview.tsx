import React from "react";
import Link from "next/link";

import { PostPreview } from "./styled";

type Props = {
  id: number;
  title: string;
  body: string;
};

export default ({ id, title, body }: Props) => (
  <PostPreview>
    <p>id: {id}</p>
    <h3>{title}</h3>
    <p>{body}</p>
    <Link href={`/posts/${id}`}>
      <a> Get details</a>
    </Link>
  </PostPreview>
);
