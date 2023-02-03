import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';
import * as React from 'react';

import './photolistcard.scss';

function PhotoListCard({
  id,
  title,
  subtitle,
  tags,
  thumbnail,
  date,
  link,
}: {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  thumbnail: IGatsbyImageData;
  date: string;
  link: string;
}) {
  const coverThumbnail = getImage(thumbnail);

  return (
    <Link to={`/${link}`} className="photolistcard">
      <div className="photolistcard-left">
        {coverThumbnail && (
          <GatsbyImage image={coverThumbnail} alt="thumbnail" />
        )}
      </div>
      <div className="photolistcard-right">
        <div className="photolistcard-right-tags">
          {tags?.map((tag, index) => (
            <span key={id + tag + index} className="photolistcard-right-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="photolistcard-right-title">{title}</div>
        <div className="photolistcard-right-sub-title">{subtitle}</div>
        <div className="photolistcard-right-date">{date}</div>
      </div>
    </Link>
  );
}

export default PhotoListCard;
