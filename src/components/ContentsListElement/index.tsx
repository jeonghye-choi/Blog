import { Link } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { useState } from 'react';

import './contentsListElement.scss';

interface ContentsType {
  tags: string[];
  title: string;
  contents: string;
  date: string;
  slug: string;
  mainImage: IGatsbyImageData;
}

function ContentsListElement({
  tags,
  title,
  contents,
  date,
  slug,
  mainImage,
}: ContentsType) {
  const [isImg, setIsImg] = useState(true);

  const main_image: any | undefined = getImage(mainImage);

  return (
    <Link to={slug}>
      <article className="contents-list-element">
        <div className="contents-preview-wrap">
          {tags.map((tag: string, index: number) => (
            <span key={index + tag} className="tag highlight">
              #{tag}
            </span>
          ))}
          <div className="title">{title}</div>
          <div className="contents">{contents}</div>
          <div className="date">{date}</div>
        </div>
        <GatsbyImage
          image={main_image}
          alt=""
          style={{
            display: isImg ? 'block' : 'none',
          }}
        />
      </article>
    </Link>
  );
}

export default ContentsListElement;
