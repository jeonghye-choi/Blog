import Seo from 'components/Seo';
import NotFound from 'containers/NotFound';
import * as React from 'react';

// markup
const NotFoundPage = () => {
  return (
    <>
      <Seo title="404: Not found" />
      <NotFound />
    </>
  );
};

export default NotFoundPage;
