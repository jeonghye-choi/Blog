import { PostFrontmatterType } from 'CreatePostPagesQuery';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';

import './photocard.scss';

interface PhotoCardProps extends PostFrontmatterType {
  id: string;
  link: string;
}

function PhotoCard(props: PhotoCardProps) {
  const { id, title, date, tags, categories, link } = props;
  const thumbnail = getImage(props.thumbnail);

  return (
    <Link to={`/${link}`} className="photocard">
      {thumbnail && <GatsbyImage image={thumbnail} alt="thumbnail" />}
      <div className="title">{title}</div>
      <div className="date">{date}</div>
    </Link>
  );
}

export default PhotoCard;
