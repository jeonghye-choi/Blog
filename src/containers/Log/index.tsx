import { PostsEdgeType } from 'CreatePostPagesQuery';
import Tag from 'components/Tag';
import usePostsActions from 'hooks/usePostsActions';
import queryString, { ParsedQuery } from 'query-string';
import * as React from 'react';
import { useMemo } from 'react';
import 'styles/page.scss';

import LogContent from './LogContent';

function Log() {
  const postActions = usePostsActions();
  const posts = postActions.getPosts();

  let parsed = {} as ParsedQuery<string>;
  const page = 'log';
  if (typeof window !== 'undefined') {
    parsed = queryString.parse(window.location.search);
  }

  const selectedTag =
    typeof parsed.tag !== 'string' || !parsed.tag ? 'All' : parsed.tag;

  const tags = useMemo(
    () =>
      posts.reduce(
        (
          list: string[],
          {
            node: {
              frontmatter: { tags },
              slug,
            },
          }: PostsEdgeType,
        ) => {
          if (tags) {
            tags.forEach(tag => {
              if (!list.includes(tag) && page === slug?.split('/')[0]) {
                list.push(tag);
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
      <Tag selectedTag={selectedTag} tags={tags} />
      <LogContent selectedTag={selectedTag} posts={posts} page={page} />
    </>
  );
}

export default Log;
