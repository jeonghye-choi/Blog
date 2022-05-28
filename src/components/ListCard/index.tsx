import { PostFrontmatterType } from 'CreatePostPagesQuery';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';

import './listCard.scss';

interface ListCardProps extends PostFrontmatterType {
  id: string;
  body: string;
}

function ListCard(props: ListCardProps) {
  const { id, title, date, tags, categories, link } = props;
  const thumbnail = getImage(props.thumbnail);

  return (
    <Link to={`/${link}`} className="card">
      {thumbnail && <GatsbyImage image={thumbnail} alt="thumbnail" />}
      <div className="title">{title}</div>
      <div className="date">{date}</div>
    </Link>
  );
}

export default ListCard;
