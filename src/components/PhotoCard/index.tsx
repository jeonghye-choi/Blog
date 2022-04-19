import { PostFrontmatterType } from 'CreatePostPagesQuery';
import { Link } from 'gatsby';
import * as React from 'react';

import './photocard.scss';

interface PhotoCardProps extends PostFrontmatterType {
  id: string;
  link: string;
}

function PhotoCard(props: PhotoCardProps) {
  const { id, title, date, tags, categories, thumbnail, link } = props;

  return (
    <Link to={`/${link}`} className="card">
      <img src="" alt="thumbnail" />
      <div className="title">{title}</div>
      <div className="date">{date}</div>
    </Link>
  );
}

export default PhotoCard;
