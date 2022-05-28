import { PostFrontmatterType } from 'CreatePostPagesQuery';
import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as React from 'react';

import './listCard.scss';

interface ListCardProps extends PostFrontmatterType {
  id: string;
  body: string;
}

function ListCard(props: ListCardProps) {
  const { id, date, title, body, tags } = props;

  return (
    <li className="listcard">
      <div className="title">{title}</div>
      <div className="date">{date}</div>

      <main className="body">
        <MDXRenderer>{body}</MDXRenderer>
      </main>

      <div className="tags">
        {tags?.map((tag, index) => (
          <span key={index}>#{tag}</span>
        ))}
      </div>
    </li>
  );
}

export default ListCard;
