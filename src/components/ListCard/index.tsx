import { PostFrontmatterType } from 'CreatePostPagesQuery';
import { Link } from 'gatsby';
import * as React from 'react';

import './listCard.scss';

interface ListCardProps extends PostFrontmatterType {
  id: string;
  link: string;
}

function ListCard(props: ListCardProps) {
  const { id, title, date, tags, categories, thumbnail, link } = props;

  return (
    <Link to={`/${link}`} className="card">
      <img src="" />
      <div className="title">{title}</div>
      <div className="date">{date}</div>
    </Link>
  );
}

export default ListCard;
