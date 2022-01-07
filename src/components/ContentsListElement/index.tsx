import { Link } from 'gatsby';
import React, { useState } from 'react';

import './contentsListElement.scss';

interface ContentsType {
  tags: string[];
  title: string;
  contents: string;
  date: string;
  slug: string;
  img: string;
}

function ContentsListElement({
  tags,
  title,
  contents,
  date,
  slug,
  img,
}: ContentsType) {
  const [isImg, setIsImg] = useState(true);

  return (
    <Link to={slug}>
      <article className="contents-list-element">
        <div className="contents-preview-wrap">
          {tags.map((tag: string, index: number) => (
            <span key={index + tag} className="tag highlight">
              {tag}
            </span>
          ))}
          <div className="title">{title}</div>
          <div className="contents">{contents}</div>
          <div className="date">{date}</div>
        </div>
        <img
          style={{
            display: isImg ? 'block' : 'none',
          }}
          src={img}
        />
      </article>
    </Link>
  );
}

export default ContentsListElement;
