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
  const devPosts = postActions.getPosts();

  let parsed = {} as ParsedQuery<string>;
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
      devPosts.reduce(
        (
          list: string[],
          {
            node: {
              frontmatter: { categories },
            },
          }: PostsEdgeType,
        ) => {
          if (categories) {
            categories.forEach(category => {
              if (!list.includes(category)) {
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
      devPosts.reduce(
        (
          list: string[],
          {
            node: {
              frontmatter: { categories, tags },
            },
          }: PostsEdgeType,
        ) => {
          if (tags && categories) {
            tags.forEach(tag => {
              if (
                !list.includes(tag) &&
                categories.includes(selectedCategory)
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
        posts={devPosts}
      />
    </>
  );
}
export default Dev;
