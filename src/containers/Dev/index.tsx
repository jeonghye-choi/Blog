import { PostType } from 'CreatePostPagesQuery';
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

  const parsed: ParsedQuery<string> = queryString.parse(window.location.search);
  const selectedCategory =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category;
  const categories = useMemo(
    () =>
      devPosts.reduce(
        (
          list: string[],
          {
            node: {
              frontmatter: { categories },
            },
          }: PostType,
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

  return (
    <>
      <Category selectedCategory={selectedCategory} categories={categories} />
      <Tag />
      <DevContent selectedCategory={selectedCategory} posts={devPosts} />
    </>
  );
}
export default Dev;
