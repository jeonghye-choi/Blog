import { PostsEdgeType } from 'CreatePostPagesQuery';
import Category from 'components/Category';
import Tag from 'components/Tag';
import usePostsActions from 'hooks/usePostsActions';
import queryString, { ParsedQuery } from 'query-string';
import * as React from 'react';
import { useMemo } from 'react';
import 'styles/page.scss';

import DevContent from './DevContent';

function Dev() {
  const postActions = usePostsActions();
  const posts = postActions.getPosts();

  let parsed = {} as ParsedQuery<string>;
  const page = 'dev';
  if (typeof window !== 'undefined') {
    parsed = queryString.parse(window.location.search);
  }

  const selectedCategory =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category;
  const selectedTag =
    typeof parsed.tag !== 'string' || !parsed.tag ? 'All' : parsed.tag;

  const categories = useMemo(
    () =>
      posts.reduce(
        (
          list: string[],
          {
            node: {
              frontmatter: { categories },
              slug,
            },
          }: PostsEdgeType,
        ) => {
          if (categories) {
            categories.forEach(category => {
              if (!list.includes(category) && page === slug.split('/')[0]) {
                list.push(category);
              }
            });
          }
          return list;
        },
        [],
      ),
    [],
  );
  const tags = useMemo(
    () =>
      posts.reduce(
        (
          list: string[],
          {
            node: {
              frontmatter: { categories, tags },
              slug,
            },
          }: PostsEdgeType,
        ) => {
          if (tags && categories) {
            tags.forEach(tag => {
              if (
                !list.includes(tag) &&
                categories.includes(selectedCategory) &&
                page === slug.split('/')[0]
              ) {
                list.push(tag);
              }
            });
          }
          return list;
        },
        [],
      ),
    [selectedCategory],
  );

  return (
    <>
      <Category selectedCategory={selectedCategory} categories={categories} />
      <Tag
        selectedCategory={selectedCategory}
        selectedTag={selectedTag}
        tags={tags}
      />
      <DevContent
        selectedCategory={selectedCategory}
        selectedTag={selectedTag}
        posts={posts}
        page={page}
      />
    </>
  );
}
export default Dev;
