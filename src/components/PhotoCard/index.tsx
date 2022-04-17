import { PostFrontmatterType } from 'CreatePostPagesQuery';
import * as React from 'react';

import './photocard.scss';

function PhotoCard(props: PostFrontmatterType) {
  const { title, date, tags, categories, thumbnail } = props;

  return (
    <div className="card">
      <img src="" alt="thumbnail" />
      <div className="title">{title}</div>
      <div className="date">{date}</div>
    </div>
  );
}

export default PhotoCard;
