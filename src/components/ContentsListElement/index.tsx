import React, { useState } from 'react';

import './contentsListElement.scss';

interface ContentsType {
  tags: string[];
  title: string;
  contents: string;
  date: string;
  img: string;
}

function ContentsListElement({
  tags,
  title,
  contents,
  date,
  img,
}: ContentsType) {
  const [isImg, setIsImg] = useState(true);

  return (
    <article className="contents-list-element">
      <div className="contents-preview-wrap">
        <span className="tag highlight">{tags}</span>
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
  );
}

export default ContentsListElement;
