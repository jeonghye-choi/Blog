import ContentsListElement from 'components/ContentsListElement';
import Layout from 'components/Layout';
import { graphql } from 'gatsby';
import React, { useMemo, useState } from 'react';
import dummyImg2 from 'static/image/dummyImg2.jpg';

import './dev.scss';

export type Post = {
  node: {
    id: 'string';
    slug: 'string';
    frontmatter: {
      date: 'string';
      tags: string[];
      title: 'string';
    };
    body: 'string';
  };
};

export type CategoryType = {
  fieldValue: 'string';
  edges: [Post];
};

function DevPage({ data }: any) {
  const [categorySelected, setCategorySelected] = useState('Front');
  const [tagSelected, setTagSelected] = useState('전체');
  const categoryGroup = data.allMdx.group;
  const [tagGroup, setTagGroup] = useState<JSX.Element[]>([]);
  const [currentPostList, setCurrentPostList] = useState<JSX.Element[]>([]);

  useMemo(() => {
    categoryGroup.map((category: any) => {
      if (category.fieldValue === categorySelected) {
        setTagGroup(category.group);
      }
    });
  }, [categorySelected]);

  useMemo(() => {
    tagGroup.map((tag: any) => {
      if (tagSelected === '전체') {
        setCurrentPostList(tag.nodes);
      } else if (tag.fieldValue === tagSelected) {
        setCurrentPostList(tag.nodes);
      }
    });
  }, [tagGroup, tagSelected]);

  return (
    <Layout>
      <div className="dev-page">
        <section className="title-wrap">
          <span className="title">Dev</span>
          {categoryGroup.map((category: any, index: number) => {
            return (
              <div
                key={category.fieldValue + index}
                className={
                  category.fieldValue === categorySelected
                    ? 'category underline'
                    : 'category'
                }
                onClick={() => {
                  setCategorySelected(category.fieldValue);
                  setTagSelected('전체');
                }}>
                {category.fieldValue}
              </div>
            );
          })}
        </section>

        <section className="tag-wrap">
          <div
            className="tag all"
            onClick={() => {
              setTagSelected('전체');
            }}>
            전체
          </div>
          {tagGroup.map((tag: any, index) => {
            return (
              <div
                className={
                  tag.fieldValue === tagSelected ? 'tag selected' : 'tag'
                }
                key={index}
                onClick={() => {
                  setTagSelected(tag.fieldValue);
                }}>
                {tag.fieldValue}
              </div>
            );
          })}
        </section>

        <section className="contents-list">
          {currentPostList.map((post: any) => {
            return (
              <ContentsListElement
                key={post.id}
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
                contents={post.excerpt}
                date={post.frontmatter.date}
                slug={post.slug}
                img={dummyImg2}
              />
            );
          })}
        </section>
      </div>
    </Layout>
  );
}
export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      group(field: frontmatter___category) {
        fieldValue
        group(field: frontmatter___tags) {
          fieldValue
          nodes {
            frontmatter {
              date(formatString: "YYYY.MM.DD")
              tags
              title
            }
            id
            slug
            excerpt(truncate: true, pruneLength: 30)
          }
        }
      }
    }
  }
`;

export default DevPage;
