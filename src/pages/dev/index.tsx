import ContentsListElement from 'components/ContentsListElement';
import Layout from 'components/Layout';
import TagList from 'components/TagList';
import { graphql } from 'gatsby';
import React, { useMemo, useState } from 'react';
import dummyImg2 from 'static/image/dummyImg2.jpg';
import 'styles/dev.scss';

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
  const [tagSelected, setTagSelected] = useState('React');
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
      if (tag.fieldValue === tagSelected) {
        setCurrentPostList(tag.nodes);
      }
    });
    console.log('currentPostList', currentPostList);
  }, [tagGroup]);

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
                    ? 'category-upper underline'
                    : 'category-upper'
                }
                onClick={() => {
                  setCategorySelected(category.fieldValue);
                }}>
                {category.fieldValue}
              </div>
            );
          })}
        </section>

        <section className="category-lower-wrap">
          <TagList />
        </section>

        <section className="contents-list">
          {currentPostList.map((post: any) => {
            console.log('post', post.frontmatter);
            console.log(typeof post);
            return (
              <ContentsListElement
                key={post.id}
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
                contents={post.excerpt}
                date={post.frontmatter.date}
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
