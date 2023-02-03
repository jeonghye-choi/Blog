import usePostsActions from 'hooks/usePostsActions';
import * as React from 'react';
import 'styles/page.scss';

import BookContent from './BookContent/BookContent';

function Book() {
  const postActions = usePostsActions();
  const posts = postActions.getPosts();

  return (
    <>
      <BookContent posts={posts} />
    </>
  );
}

export default Book;
