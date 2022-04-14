import Category from 'components/Category';
import Tag from 'components/Tag';
import usePostsActions from 'hooks/usePostsActions';
import * as React from 'react';
import 'styles/page.scss';

import DevContent from './DevContent';

function Dev() {
  const postActions = usePostsActions();
  const devPosts = postActions.getPosts().posts.edges;

  return (
    <>
      <Category />
      <Tag />
      <DevContent posts={devPosts} />
    </>
  );
}
export default Dev;
