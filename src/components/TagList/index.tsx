import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import './tagList.scss';

function TagList() {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        group(field: frontmatter___tags) {
          fieldValue
          nodes {
            frontmatter {
              date(formatString: "YYYY.MM.DD")
              tags
              title
            }
            id
          }
        }
      }
    }
  `);
  const TagGroup = data.allMdx.group;

  return (
    <>
      <div className="category-lower all">전체</div>
      {TagGroup.map((tag: any, index: number) => {
        return (
          <div className="category-lower" key={index}>
            {tag.fieldValue}
          </div>
        );
      })}
    </>
  );
}

export default TagList;
